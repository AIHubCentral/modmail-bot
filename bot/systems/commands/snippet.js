const Core = require("core");

exports.data = {
  name: "snippet",
  description: "Sends or edits a snippet",
  options: [
    {
      type: "STRING",
      name: "snippet",
      description: "Name of the snippet to edit or send",
      required: true
    },
    {
      type: "STRING",
      name: "content",
      description: "New content of the snippet",
      required: false
    }
  ]
}

/**
 * @param {Discord.CommandInteraction} interaction
 */
exports.run = async (interaction) => {

  let snippetName = interaction.options.get("snippet").value,
    snippetContent = interaction.options.get("content")?.value;

  if (snippetContent) {

    Core.database.query("INSERT INTO snippets (name, content) VALUES (?, ?) ON DUPLICATE KEY UPDATE name = ?, content = ?", [snippetName, snippetContent, snippetName, snippetContent]);

    interaction.reply({
      ...Core.messages.get("snippetset", {
        name: snippetName,
        content: snippetContent
      }),
      ephemeral: true
    });

  } else {

    // channel.name = userId
    let ticket = Core.tickets.cache.get(interaction.channel.name);

    if (!ticket) return;

    await interaction.deferReply({ephemeral: true});

    //snippetContent = await new Promise((resolve) => Core.database.query("SELECT content FROM snippets WHERE name = ?", [snippetName], (error, results) => resolve(results[0] ? results[0].content : null)));
    snippetContent = await Core.supabase.from("snippets").select("content").eq("name", snippetName).then((result) => result.data?.[0]?.content);

    if (!snippetContent) {
      console.log("No snippet found for command", interaction.customId, "in channel", interaction.channel.name);
      return;
    }

    let addMsgResult = await ticket.addMessage("GUILD", {
      author: interaction.member.user,
      content: snippetContent
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

}