const Core = require("core");

exports.data = {
  name: "logs",
  description: "View all tickets of a user",
  options: [
    {
      type: "USER",
      name: "user",
      description: "User whose tickets to view",
      required: true
    }
  ]
}

/**
 * @param {Discord.CommandInteraction} interaction
 */
exports.run = async (interaction) => {

  let userId = interaction.options.get("user")?.user?.id,
    user = await interaction.guild.members.fetch(userId).then((m) => m.user).catch(() => dClient.users.fetch(userId).catch(() => null));

  if (!user) return;

  await interaction.deferReply({ephemeral: true});

  //Core.database.query("SELECT * FROM tickets WHERE userId = ?", [userId], (err, result) => {
  await Core.supabase.from("tickets").select("*").eq("userid", userId).then(async (result) => {
    interaction.editReply({
      embeds: [
        {
          color: Core.data.config.messageTypes.default.color,
          title: `\`${result.length}\` Tickets from ${user.username}`,
          description: result.map((r) => {
            return `<t:${Math.floor(r.createdtimestamp / 1000)}:R> | [${r.reason}](${process.env.DASHBOARD_HOST}/tickets/${r.id})`
          }).join("\n")
        }
      ]
    });

  });

}