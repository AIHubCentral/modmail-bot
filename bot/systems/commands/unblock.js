const Core = require("core");

exports.data = {
  name: "unblock",
  description: "Unblocks a user",
  options: [
    {
      type: "USER",
      name: "user",
      description: "User to unblock",
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

  //Core.database.query(`DELETE FROM blocked WHERE id = ?`, [user.id]);
  await Core.supabase.from("blocked").delete().eq("id", user.id)
    .then((result) => {
      //console.log(result);
      interaction.reply({
        ...Core.messages.get("userunblocked", {
          user: user.username
        }),
        ephemeral: true
      });
    });

}