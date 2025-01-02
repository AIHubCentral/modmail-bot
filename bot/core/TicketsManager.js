const Discord = require("discord.js");

const Ticket = require("./Ticket");

class TicketsManager {

  /**
   * All opened tickets
   * key: userId; value: Ticket
   * @type {Map<Discord.Snowflake, Ticket>}
   */
  static cache = new Discord.Collection();

  static load() {
    return new Promise(async (resolve, reject) => {
      const Core = require("core");

      //Core.database.query("SELECT * FROM tickets WHERE closedTimestamp IS NULL", async (err, result) => {
      await Core.supabase.from("tickets").select("*").is("closedtimestamp", null).then(async (result) => {
        for (let ticket of result.data) {
          if (!TicketsManager.cache.get(ticket.userid)) {
            ticket.isTicket = true;
            ticket = new Ticket(ticket);

            await ticket._init().then(() => {
              TicketsManager.cache.set(ticket.userId, ticket);
              console.log("Ticket loaded", ticket.userId);
            }).catch(() => null);
          }
        }
        console.log(`Loaded ${result.data.length} open tickets.`);
        resolve();
      });
    });
  }

  /**
   * Creates / Opens a ticket
   * @param {Discord.Snowflake} userId
   * @param {Discord.Snowflake} authorId
   * @param {String} reason
   * @param {String|null} comment
   * @param {boolean} withDM
   * @returns {Ticket} Ticket
   */
  static async create(userId, authorId, reason, comment = null, attachedUsers = [], withDM = true) {
    if (this.cache.get(userId)) return this.cache.get(userId);
    let ticket = new Ticket(userId, authorId, reason, comment, attachedUsers);
    TicketsManager.cache.set(userId, ticket);
    await ticket._init(withDM);
    return ticket;
  }

  static isUserIdBlocked(userId) {
    return new Promise(async (resolve) => {
      const Core = require("core");

      //Core.database.query("SELECT id FROM blocked WHERE id = ?", [userId], (err, result) => {
      await Core.supabase.from("blocked").select("id").eq("id", userId).then((result) => {
        if (result?.length > 0) return resolve(true);
        resolve(false);
      });
    });
  }

  static getModalData({type, comment = ""}) {
    switch (type) {
      case "create":
        return {
          custom_id: "createticket", title: "Open Support Ticket", components: [{
            type: 1, components: [{
              type: 4,
              custom_id: "reason",
              label: "Reason - Why do you want to open a ticket?",
              style: 1,
              min_length: 4,
              max_length: 100,
              placeholder: "e.g. \"Reporting\" or \"I have a question\"",
              required: true
            }]
          }, {
            type: 1, components: [{
              type: 4,
              custom_id: "comment",
              label: "Comment - Describe your issue in detail",
              style: 2,
              min_length: 1,
              max_length: 1000,
              value: comment?.slice?.(0, 990) || null,
              placeholder: "e.g. \"User has been insulting me in #the-lounge\" or \"How do I get the Model Maker role?\"",
              required: true
            }],
          }, {
            type: 1, components: [{
              type: 4,
              custom_id: "userids",
              label: "Usernames / IDs (optional)",
              style: 1,
              max_length: 500,
              placeholder: "e.g. \"sleepyyui teas.hi\" or \"443769343138856961 1122576354425176114\"",
              required: false
            }]
          }]
        };
    }
    return {};
  }

  static handleModals() {
    const Core = require("core");
    let dClient = Core.data.discordClient;

    dClient.on("raw", async (event) => {
      let eventName = event.t, eventData = event.d;

      if (eventName !== "INTERACTION_CREATE" || eventData.type !== 5 || eventData.data?.custom_id !== "createticket") return;

      let isDM = dClient.channels.resolve(eventData.channel_id)?.type === "DM";

      let modalData = {};
      for (let data of eventData.data.components.map(c => c.components.map(c2 => c2)).flat()) modalData[data.custom_id] = data.value;

      let interaction = isDM ? new Discord.MessageComponentInteraction(dClient, eventData) : new Discord.BaseCommandInteraction(dClient, eventData);

      // Send loading message
      await interaction.reply({
        ...Core.messages.get("creatingticket"), ephemeral: !isDM
      });

      if (await Core.tickets.isUserIdBlocked(interaction.user.id)) return interaction.editReply({
        ...Core.messages.get("youareblocked"), ephemeral: !isDM
      });

      let ticket = await Core.tickets.create(interaction.user.id, interaction.user.id, modalData.reason, modalData.comment, modalData.userids?.split?.(" ") || []).catch((e) => {
        console.log(e);
        return null;
      });

      if (!ticket) return await interaction.editReply({
        ...Core.messages.get("ticketnotcreated"), ephemeral: !isDM
      });

      // Reply to interaction
      if (isDM) await interaction.deleteReply(); else await interaction.editReply({
        ...Core.messages.get("ticketcreated", {
          dmmessageurl: `https://discord.com/channels/@me/${ticket.dmChannelId}`
        }), ephemeral: !isDM
      });

    });

  }

}

module.exports = TicketsManager;