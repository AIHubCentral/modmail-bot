const Core = require("core");

let dClient = Core.data.discordClient;

exports.data = {
  name: "support",
  description: "Creates a support ticket"
}

/**
 * @param {Discord.CommandInteraction} interaction
 */
exports.run = async (interaction) => {

  // channel.name = userId
  let ticket = Core.tickets.cache.get(interaction.member.id);

  if (ticket)
    return interaction.reply({
      ...Core.messages.get("ticketalreadycreated", {
        dmchannelurl: `https://discord.com/channels/@me/${ticket.dmChannel.id}`
      }),
      ephemeral: true
    });

  dClient.api.interactions(interaction.id, interaction.token).callback.post({
    data: {
      type: 9,
      data: Core.tickets.getModalData({type: "create"})
    }
  });

}