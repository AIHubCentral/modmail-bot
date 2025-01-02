const Core = require("core");

exports.data = {
  name: "reply",
  description: "Answers a ticket",
  options: [
    {
      type: "STRING",
      name: "message",
      description: "Message",
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

  let formattedMessage = interaction.options.get("message")?.value
  formattedMessage = formattedMessage.replaceAll("\\n", "\n");

  let addMsgResult = await ticket.addMessage("GUILD", {
    author: interaction.member.user,
    content: formattedMessage
  });

  if (addMsgResult?.errCode === 409) {

    interaction.editReply({
      content: `${Core.data.config.messageTypes.error.emoji} **Message could not be sent:**\n> ${addMsgResult.error}`
    });

  } else {

    interaction.editReply({
      content: `${Core.data.config.messageTypes.success.emoji} Message sent.`
    });

  }

}