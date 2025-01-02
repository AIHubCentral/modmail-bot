const Core = require("core");

exports.data = {
  name: "block",
  description: "Blocks a user",
  options: [
    {
      type: "USER",
      name: "user",
      description: "User to block",
      required: true
    },
    {
      type: "STRING",
      name: "reason",
      description: "Reason for blocking",
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

  //Core.database.query(`INSERT INTO blocked (id, authorId, reason, blockedTimestamp) VALUES (?, ?, ?, ?)`, [user.id, interaction.member.id, interaction.options.get("reason").value, Date.now()]);
  await Core.supabase.from("blocked").insert([{
    id: user.id,
    authorid: interaction.member.id,
    reason: interaction.options.get("reason").value,
    blockedtimestamp: Date.now()
  }])
    .then(() => {
      interaction.reply({
        ...Core.messages.get("userblocked", {
          user: user.username
        }),
        ephemeral: true
      });
    })
}
