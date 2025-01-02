const Core = require("core");

exports.data = {
  name: "edit",
  description: "Edits a message",
  options: [
    {
      type: "STRING",
      name: "id",
      description: "ID of the message to edit",
      required: true
    },
    {
      type: "STRING",
      name: "content",
      description: "New content of the message",
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

  let formattedMessage = interaction.options.get("content")?.value
  formattedMessage = formattedMessage.replaceAll("\\n", "\n");

  let edited = await ticket.editMessage(interaction.options.get("id").value, formattedMessage);

  if (edited) {

    interaction.editReply({
      content: `${Core.data.config.messageTypes.success.emoji} Message edited.`
    });

  } else {

    interaction.editReply({
      content: `${Core.data.config.messageTypes.error.emoji} Message not found.`
    });

  }

}