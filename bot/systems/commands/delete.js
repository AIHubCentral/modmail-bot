const Core = require("core");

exports.data = {
  name: "delete",
  description: "Deletes a message",
  options: [
    {
      type: "STRING",
      name: "id",
      description: "ID of the message to delete",
      required: true
    }
  ]
}

/**
 * @param {Discord.CommandInteraction} interaction
 */
exports.run = async (interaction) => {

  // channel.name = userId
  let ticket = Core.tickets.cache.get(interaction.channel.name);

  if (!ticket) return;

  await interaction.deferReply({ephemeral: true});

  let deleted = await ticket.deleteMessage(interaction.options.get("id").value);

  if (deleted) {

    interaction.editReply({
      content: `${Core.data.config.messageTypes.success.emoji} Message deleted.`
    });

  } else {

    interaction.editReply({
      content: `${Core.data.config.messageTypes.error.emoji} Message not found.`
    });

  }

}