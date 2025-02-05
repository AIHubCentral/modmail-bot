const {nanoid} = require("nanoid"), Discord = require("discord.js");
const Core = require("./index");

/**
 * Represents a not-closed support ticket
 */
class Ticket {

  /**
   * Creates / Opens a ticket
   * @param {Discord.Snowflake} userId
   * @param {Discord.Snowflake} authorId
   * @param {String} reason
   * @param {String|null} comment
   */
  constructor(userId, authorId, reason, comment = null, attachedUsers = []) {

    if (userId.isTicket) {

      this.ready = true;
      this.ticketId = userId.id;
      this.userId = userId.userid;
      this.authorId = userId.authorid;
      this.dmChannelId = userId.dmchannelid;
      this.reason = userId.reason;
      this.comment = userId.comment;
      this.attachedUsers = JSON.parse(userId.attachedusers) || [];
      this.createdTimestamp = userId.createdtimestamp;
      this.closedTimestamp = userId.closedtimestamp;
      this.closedAuthorId = userId.closedauthorid;

      let messages = new Discord.Collection();
      for (let message of JSON.parse(userId.messages)) messages.set(message.id, message);
      this.messages = messages;

    } else {

      this.ready = false;
      this.ticketId = nanoid(12);
      this.userId = userId;
      this.authorId = authorId;
      this.reason = reason;
      this.comment = comment;
      this.attachedUsers = attachedUsers || [];
      this.createdTimestamp = Date.now();

      this.messages = new Discord.Collection();

    }

  }

  async _init(withDM = true) {

    const Core = require("core");

    let {discordClient: dClient, config} = Core.data;

    this.guild = dClient.guilds.resolve(process.env.GUILD_ID);
    this.member = await this.guild.members.fetch(this.userId).catch(() => null);
    this.author = await this.guild.members.fetch(this.authorId).catch(() => null);
    this.user = this.member.user

    // Close ticket instantly when user left
    if (!this.user) {
      console.log("Ticket from user", this.userId, "closed because they left the server.");
      await this.close();
      throw new Error("User not found");
    }

    // Check DM availability
    if (this.dmChannelId) {
      this.dmChannel = await dClient.channels.fetch(this.dmChannelId).catch(() => null);
    } else {
      this.dmChannel = await this.user.createDM().catch(() => null);
      if (!this.dmChannel) throw new Error("User disabled DMs");
      this.dmChannelId = this.dmChannel.id;
    }

    let foundChannel = this.guild.channels.resolve(config.channelIds.ticketsCategory).children.find(c => c.name === this.userId);

    this.channel = this.ready && foundChannel ? foundChannel : (await this.guild.channels.resolve(config.channelIds.ticketsCategory).createChannel(this.userId, {
      reason: `${this.author.user.username} created a ticket`
    }));

    this.webhook = (await this.channel.fetchWebhooks().then((webhooks) => webhooks.find(w => w.owner?.id === dClient.user.id)).catch(() => null)) || (await this.channel.createWebhook("Messages"));

    let allMessages = this.guild.channels.cache.map(c => c.messages ? [...c.messages.cache.values()] : []).flat();
    let attachedUsersDisplay = (await Promise.all(this.attachedUsers.map(async u => {
      if (Number.isInteger(parseInt(u))) {
        let member = await this.guild.members.fetch(u).catch(() => null),
          user = member?.user || (await dClient.users.fetch(u).catch(() => null)) || null;
        if (!user) return `**${u}**`;
        let userMessage = allMessages.find(m => m?.author && m.author.id === user.id);
        return `${member?.nickname ? `${member.nickname} | ` : ""}**${user.username}** | \`${user.id}\`${userMessage ? ` | [Last Message](${userMessage.url})` : ""}`
      } else {
        let user = dClient.users.cache.find(u2 => u2.tag === u);
        if (!user) {
          user = dClient.users.cache.find(u2 => u2.username === u);
          if (!user) return `**${u}**`;
          let member = this.guild.members.resolve(user.id);
          let userMessage = allMessages.find(m => m?.author && m.author.id === user.id);
          return `${member?.nickname ? `${member.nickname} | ` : ""}**${user.username}** | \`${user.id}\`${userMessage ? ` | [Last Message](${userMessage.url})` : ""}`

        }
        let member = this.guild.members.resolve(user.id);
        let userMessage = allMessages.find(m => m?.author && m.author.id === user.id);
        return `${member?.nickname ? `${member.nickname} | ` : ""}**${user.username}** | \`${user.id}\`${userMessage ? ` | [Last Message](${userMessage.url})` : ""}`
      }
    }))).join("\n");

    // Create ticket message
    if (!this.ready) {
      this.infoMessage = await this.channel.send(Core.messages.get("ticketinfo", {
        userid: this.userId,
        usertag: this.user.tag,
        username: this.user.username,
        useravatarurl: this.user.displayAvatarURL({dynamic: true}),
        usercreatedtimestamp: Math.floor(this.user.createdTimestamp / 1000),
        memberjoinedtimestamp: Math.floor(this.member.joinedTimestamp / 1000),
        membernickname: this.member.nickname || "/",
        memberroles: Discord.Util.discordSort(this.member.roles.cache).filter(r => r.id !== process.env.GUILD_ID).map(r => `<@&${r.id}>`).reverse().join(" "),
        dmchannelid: this.dmChannel.id,
        reason: this.reason,
        comment: this.comment || "/",
        attachedusers: attachedUsersDisplay,
        ticketId: this.ticketId,
        host: process.env.DASHBOARD_HOST
      }));
    }

    if (withDM && !this.ready) {

      // Send DM message
      this.dmMessage = await this.dmChannel.send(Core.messages.get("dmticketcreated", {
        reason: this.reason, comment: this.comment || "/", attachedusers: attachedUsersDisplay,
      }));

    }

    /*if (!this.ready) Core.database.query(`INSERT INTO tickets (id, userId, authorId, dmChannelId, reason, comment,
                                                               attachedUsers,
                                                               createdTimestamp, messages, notifyUserIds)
                                          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,
                                                  ?)`, [this.ticketId, this.userId, this.authorId, this.dmChannel?.id, this.reason, this.comment || null, JSON.stringify(this.attachedUsers), this.createdTimestamp, "[]", "[]"]);*/
    if (!this.ready) await Core.supabase.from("tickets").insert([{
      id: this.ticketId,
      userid: this.userId,
      authorid: this.authorId,
      dmchannelid: this.dmChannel?.id,
      reason: this.reason,
      comment: this.comment || "/",
      attachedusers: JSON.stringify(this.attachedUsers),
      createdtimestamp: this.createdTimestamp,
      messages: "[]",
      notifyuserids: "[]"
    }]).then((result) => {
      console.log("Created ticket", this.ticketId);
      console.log(result);
    });

    this.ready = true;

  }

  /**
   * Adds a message to the ticket
   * @param {Discord.Message} message
   * @param {String} type DM or GUILD
   */
  async addMessage(type = "DM", message, anonymous = false) {

    /** Logs for debugging
     *  console.log("Adding message to ticket", this.ticketId, "of type", type);
     */

    const Core = require("core");

    let messageId = message.id, channelMessageId;

    const attachments = message.attachments?.map(async attachment => {
      //const isImage = Core.utils.isImage(attachment.url);
      //const isVideo = Core.utils.isVideo(attachment.url);
      const isUrl = Core.utils.isValidURL(attachment.url);
      if (isUrl) {
        let new_url = await Core.utils.uploadToCatbox(attachment.url);
        //const isNewImage = Core.utils.isImage(new_url);
        //const isNewVideo = Core.utils.isVideo(new_url);
        const isNewUrl = Core.utils.isValidURL(new_url);
        if (isNewUrl) {
          const trimmedOldUrl =  new URL(attachment.url).pathname
          new_url = new_url + "?old_path=" + trimmedOldUrl;
          attachment.url = new_url;
          attachment.proxy_url = new_url;
        }
      }
      return attachment;
    });
    if (attachments) {
      await Promise.all(attachments);
    }

    if (type === "DM") {

      channelMessageId = await this.webhook.send({
        username: `${message.author.username}`,
        avatarURL: message.author.displayAvatarURL({dynamic: true}),
        content: Core.utils.getMessageAsString(message).slice(0, 2000) || "_ _"
      }).then((m) => m?.id);

      //let notifyUserIds = JSON.parse((await new Promise((resolve) => Core.database.query("SELECT notifyUserIds FROM tickets WHERE id = ?", [this.ticketId], (err, result) => resolve(result?.[0]?.notifyUserIds))).catch(() => null)) || "[]");
      let notifyUserIds = await Core.supabase.from("tickets").select("notifyuserids").eq("id", this.ticketId).then((result) => JSON.parse(result.data?.[0]?.notifyuserids));
      if (notifyUserIds.length > 0) this.channel.send(`New Ticket Message from ${this.user?.username || this.userId} | ${notifyUserIds.map(uId => `<@${uId}>`).join(" ")}`).then((m) => m.delete());

    } else if (type === "GUILD") {

      let config = Core.data.config;

      let dmMsg = await this.dmChannel.send({
        content: config.dmPrefixes[anonymous ? "anonymous" : "user"].replace("${user}", message.author.username).replace("${message}", message.content)
      }).catch(() => "not sent");

      if (dmMsg === "not sent") return {
        errCode: 409, error: "User disabled direct messages"
      }

      messageId = dmMsg.id;

      channelMessageId = await this.webhook.send({
        username: `${message.author.username} [TEAM]${anonymous ? " [ANONYMOUS]" : ""}`,
        avatarURL: message.author.displayAvatarURL({dynamic: true}),
        content: message.content
      }).then((m) => m?.id);

    }

    this.messages.set(messageId, {
      type,
      id: messageId,
      content: Core.utils.getMessageAsString(message).slice(0, 2000) || "_ _",
      authorId: message.author.id,
      anonymous,
      channelMessageId
    });

    this.saveMessages();

  }

  /**
   * Deletes a message from the ticket using /delete
   * @param {Discord.Snowflake} messageId Webhook message ID
   */
  async deleteMessage(messageId) {

    let dmMessageId = this.messages.find(m => m.channelMessageId === messageId)?.id;

    if (!dmMessageId) return false;

    this.messages.delete(dmMessageId);

    let deleted = await this.dmChannel.messages.delete(dmMessageId).then(() => true).catch(() => null);

    if (!deleted) return false;

    this.channel.messages.delete(messageId).catch(() => null);

    this.saveMessages();

    return true;

  }

  /**
   * Edits a message from in ticket using /edit
   * @param {Discord.Snowflake} messageId Webhook message ID
   */
  async editMessage(messageId, newContent) {

    const Core = require("core");

    let {discordClient: dClient, config} = Core.data;

    let dmMessage = this.messages.find(m => m.channelMessageId === messageId);

    if (!dmMessage) return false;

    let edited = await this.dmChannel.messages.edit(dmMessage.id, {content: config.dmPrefixes[dmMessage.anonymous ? "anonymous" : "user"].replace("${user}", await dClient.users.fetch(dmMessage.authorId).then((u) => u.username).catch(() => null)).replace("${message}", newContent)}).then(() => true).catch(() => null);

    if (!edited) return false;

    this.webhook.editMessage(messageId, {content: newContent}).catch(() => null);

    dmMessage.content = newContent;
    this.messages.set(dmMessage.id, dmMessage);

    this.saveMessages();

    return true;

  }

  /**
   * Edits a DM message
   * @param {Discord.Snowflake} messageId Webhook message ID
   */
  async editDMMessage(oldMessage, message) {

    const Core = require("core");

    let dmMessage = this.messages.find(m => m.id === (message.id || oldMessage?.id));

    if (!dmMessage) return false;

    let edited = await this.webhook.editMessage(dmMessage.channelMessageId, {content: message?.content}).then(() => true).catch(() => null);

    if (!edited) return false;

    dmMessage.content = `[ EDIT - ${new Date().toLocaleString()} ] ${message?.content}\n\n-\n\n${dmMessage.content}`;
    this.messages.set(dmMessage.id, dmMessage);

    this.saveMessages();

    return true;

  }

  /**
   * Saves the current messages to the database
   */
  async saveMessages() {

    const Core = require("core");

    /*Core.database.query(`UPDATE tickets
                         SET messages=?
                         WHERE id = ?`, [JSON.stringify([...this.messages.values()]), this.ticketId]);*/
    console.log("Saving messages for ticket", this.ticketId);
    await Core.supabase.from("tickets")
      .update({messages: JSON.stringify([...this.messages.values()])})
      .eq("id", this.ticketId)
    //.then((result) => console.log(result));

    /** Logs for debugging
     * console.log("Messages for ticket saved.");
     */
  }

  async notify(userId) {

    const Core = require("core");

    //let notifyUserIds = JSON.parse((await new Promise((resolve) => Core.database.query("SELECT notifyUserIds FROM tickets WHERE id = ?", [this.ticketId], (err, result) => resolve(result?.[0]?.notifyUserIds))).catch(() => null)) || "[]");
    let notifyUserIds = await Core.supabase.from("tickets").select("notifyuserids").eq("id", this.ticketId).then((result) => result.data?.[0]?.notifyuserids);

    if (notifyUserIds.includes(userId)) {

      /*Core.database.query(`UPDATE tickets
                           SET notifyUserIds = ?
                           WHERE id = ?`, [JSON.stringify(notifyUserIds.filter(uId => uId !== userId)), this.ticketId]);*/
      await Core.supabase.from("tickets")
        .update({notifyuserids: JSON.stringify(notifyUserIds.filter(uId => uId !== userId))})
        .eq("id", this.ticketId)
      //.then((result) => console.log(result));

    } else {

      /*Core.database.query(`UPDATE tickets
                           SET notifyUserIds= ?
                           WHERE id = ?`, [JSON.stringify([...new Set([...notifyUserIds, userId])]), this.ticketId]);*/
      await Core.supabase.from("tickets")
        .update({notifyuserids: JSON.stringify([...new Set([...notifyUserIds, userId])])})
        .eq("id", this.ticketId)
      //.then((result) => console.log(result));

    }

    return !notifyUserIds.includes(userId);

  }

  async close(interaction) {
    console.log("Closing ticket", this.ticketId);

    const Core = require("core");

    Core.tickets.cache.delete(this.userId);

    // Send closed message
    if (interaction) interaction[interaction.replied ? "followUp" : "reply"](Core.messages.get("ticketclosed", {
      ticketId: this.ticketId, authorId: interaction.member.id, host: process.env.DASHBOARD_HOST
    }));

    /*Core.database.query(`UPDATE tickets
                         SET closedTimestamp = ?,
                             closedAuthorId  = ?
                         WHERE id = ?`, [Date.now(), interaction?.member?.id || Core.data.discordClient.user.id, this.ticketId]);*/
    await Core.supabase.from("tickets")
      .update({closedtimestamp: Date.now(), closedauthorid: interaction?.member?.id || Core.data.discordClient.user.id})
      .eq("id", this.ticketId)
      .then((result) => {
        console.log("Closed ticket", this.ticketId);
        console.log(result);
      });

    let logChannel = Core.data.discordClient.channels.resolve(Core.data.config.channelIds.ticketsLog);

    logChannel?.send?.(Core.messages.get("logticketclosed", {
      userid: this.userId,
      usertag: this.user?.tag || this.userId,
      username: this.user?.username || this.userId,
      authorid: interaction?.member?.id || Core.data.discordClient.user.id,
      authortag: interaction?.member?.user?.tag || Core.data.discordClient.user.tag,
      authorusername: interaction?.member?.user?.username || Core.data.discordClient.user.username,
      authoravatarurl: interaction?.member?.user?.displayAvatarURL?.({dynamic: true}) || Core.data.discordClient.user.displayAvatarURL({dynamic: true}),
      ticketid: this.ticketId,
      host: process.env.DASHBOARD_HOST,
      reason: this.reason,
      commentpreview: this.comment ? `${this.comment.slice(0, 200)}${this.comment.length > 200 ? " [...]" : ""}` : null,
      nowtimestamp: Math.floor(Date.now() / 1000)
    })).catch((e) => {
      console.log(e);
      return null
    });

    setTimeout(() => {
      this.channel?.delete()?.catch(() => null);
    }, Core.data.config.deleteChannelAfterClosedInSeconds * 1000);

  }

}

module.exports = Ticket;
