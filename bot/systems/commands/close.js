const Core = require("core");

exports.data = {
  name: "close",
  description: "Closes a ticket"
}

/**
 * @param {Discord.CommandInteraction} interaction
 */
exports.run = async (interaction) => {

  // channel.name = userId
  let ticket = Core.tickets.cache.get(interaction.channel.name);

  if (!ticket) return;

  ticket.close(interaction);

}