const Core = require("core");

exports.data = {
  name: "contact",
  description: "Creates a ticket for a user",
  options: [
    {
      type: "USER",
      name: "user",
      description: "User to contact",
      required: true
    },
    {
      type: "STRING",
      name: "reason",
      description: "Reason"
    }
  ]
}

/**
 * @param {Discord.CommandInteraction} interaction
 */
exports.run = async (interaction) => {

  // Send loading message
  await interaction.reply({
    ...Core.messages.get("creatingticket"),
    ephemeral: true
  });

  let ticket = await Core.tickets.create(
    interaction.options.get("user")?.user?.id,
    interaction.member.id,
    interaction.options.get("reason")?.value,
    null,
    [],
    false
  ).catch((e) => {
    console.log(e);
    return null;
  });

  if (!ticket)
    return await interaction.editReply({
      ...Core.messages.get("ticketnotcreated"),
      ephemeral: true
    });

  // Reply to interaction
  await interaction.editReply({
    ...Core.messages.get("ticketcreated", {
      dmmessageurl: `https://discord.com/channels/${ticket.channel.guildId}/${ticket.channel.id}`
    }),
    ephemeral: true
  });

}