const Core = require("core"),
  fs = require("fs");

let {discordClient: dClient, config, gConfig} = Core.data;

exports.run = async () => {
  await registerCommands();
  listenToSlashCommands();
}

/**
 * Register all slash commands.
 * Overwrites existing commands on changes.
 */
async function registerCommands() {

  let guild = dClient.guilds.resolve(process.env.GUILD_ID);

  let commands = fs.readdirSync(`${__dirname}/commands`).map(f => require(`./commands/${f}`)),
    registeredCommands = await guild.commands.fetch();

  let commandsToDelete = registeredCommands.filter(c => !commands.find(c2 => c2.data.name === c.name)),
    commandsToAdd = commands.filter(c => !registeredCommands.find(c2 => c2.name === c.data.name)),
    commandsToUpdate = registeredCommands.filter(c => {
      if (commandsToDelete.has(c.id)) return false;
      let foundCommand = commands.find(c2 => c2.data.name === c.name);
      return !c.equals(foundCommand?.data);
    });

  if (commandsToDelete.size) {
    Promise.all(commandsToDelete.map(c => guild.commands.delete(c.id))).then((result) => {
      console.log(`[commands] ${result.length} commands deleted`);
    });
  }

  if (commandsToAdd.length) {
    Promise.all(commandsToAdd.map(c => guild.commands.create(c.data))).then((result) => {
      console.log(`[commands] ${result.length} commands registered`);
    });
  }

  if (commandsToUpdate.size) {
    Promise.all(commandsToUpdate.map(c => guild.commands.edit(c, commands.find(c2 => c2.data.name === c.name).data))).then((result) => {
      console.log(`[commands] ${result.length} commands updated`);
    });
  }

  /**
   * Set permissions except for /support
   */
  /*let allCmds = await guild.commands.fetch();

  let authorizedResult = await new Promise((resolve, reject) => Core.database.query(`SELECT * FROM authorized`, (err, result) => err ? reject(err) : resolve(result))).catch((err) => { console.log(err); return null }),
      authorized = {
       userIds: [],
       roleIds: []
      }

  if (authorizedResult) {

   authorized = {
    userIds: [...new Set([...proccess.env.MANAGER_USER_IDS.split(","), ...authorizedResult.filter(r => r.type === "user").map(r => r.id)])].filter(id => id),
    roleIds: [...new Set(authorizedResult.filter(r => r.type === "role").map(r => r.id))]
   }

  }

  let permissionsToSet = [
   {
    id: guild.id,
    type: "ROLE",
    permission: false
   },
   ...authorized.roleIds.map(rId => {
    return {
     id: rId,
     type: "ROLE",
     permission: true
    }
   }),
   ...authorized.userIds.map(uId => {
    return {
     id: uId,
     type: "USER",
     permission: true
    }
   })
  ];



  await guild.commands.permissions.set({
   fullPermissions: allCmds.filter(cmd => cmd.name !== "support").map(cmd => {
    return {
     id: cmd.id,
     permissions: permissionsToSet
    }
   })
  });*/

}

/**
 * Listen to all slash commands
 */
function listenToSlashCommands() {
  dClient.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return;

    if (process.env.STATE === "dev")
      delete require.cache[require.resolve(`./commands/${interaction.commandName}.js`)];

    let command = require(`./commands/${interaction.commandName}.js`);

    if (command) {
      command.run(interaction);
    } else {
      interaction.reply({
        content: `Command ${interaction.commandName} not found.`
      })
    }
  });

}