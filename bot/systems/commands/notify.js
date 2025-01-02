const Core = require("core");

exports.data = {
  name: "notify",
  description: "Enables or disables notifications for new ticket messages"
}

/**
 * @param {Discord.CommandInteraction} interaction
 */
exports.run = async (interaction) => {

  // channel.name = userId
  let ticket = Core.tickets.cache.get(interaction.channel.name);

  if (!ticket) return;

  await interaction.deferReply({ephemeral: true});

  let result = await ticket.notify(interaction.member.id);

  if (result) {

    interaction.editReply({
      embeds: [{
        color: Core.data.config.messageTypes.success.color,
        title: `${Core.data.config.messageTypes.success.emoji} enabled notifications.`,
        description: "You will be notified about new messages in this ticket."
      }]
    });

  } else {

    interaction.editReply({
      embeds: [{
        color: Core.data.config.messageTypes.error.color,
        title: `${Core.data.config.messageTypes.error.emoji} disabled notifications.`,
        description: "You will not be notified about new messages in this ticket."
      }]
    });

  }

}