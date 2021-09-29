if (Number(process.version.slice(1).split(".")[0]) < 8)
  throw new Error(
    "Node 8.0.0 or higher is required. Update Node on your system."
  );

const Discord = require("discord.js");
const Enmap = require("enmap");
const { fstat } = require("fs");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const config = require("./config.json")
const leveling = require("discord-leveling")



const client = new Discord.Client();

client.login(config.token)

var prefix = process.env.PREFIX

client.config = require("./config.js");

client.logger = require("./modules/Logger");
require("./modules/functions.js")(client);



client.on("ready", () => {
  const statuses = [
    () => `${client.guilds.cache.size} serveurs `,
    () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} membres`,
    () => ` $h`
 
  ]
  let i = 0
  setInterval(() => {
    client.user.setActivity(statuses[i](), {type: 'WATCHING'})
    i = ++i % statuses.length
  }, 1e4)

})


client.on("guildCreate", gui => {
  let embed = new Discord.MessageEmbed()
        .setTitle("Un Serveur Viens De M'ajouter.")
        .addField('**Nom Du Serveur**', `${gui.name}`,)
        .addField('**Owner Du Serveur**', `${gui.owner}`,)
        .addField('**ID Du Serveur**', `${gui.id}`,)
        .addField('**Nombres de Membres**', `${gui.memberCount}`,)
        .setThumbnail(gui.iconURL({ dynamic: true }))
        .setFooter(`Hikari | Ajout`, client.user.displayAvatarURL())
        client.guilds.cache.get(" ").channels.cache.get(" ").send(embed)
});

client.on("guildDelete", gui => {
  let embed = new Discord.MessageEmbed()
        .setTitle("Un Serveur Viens De me retiré.")
        .addField('**Nom Du Serveur**', `${gui.name}`,)
        .addField('**Owner Du Serveur**', `${gui.owner}`,)
        .addField('**ID Du Serveur**', `${gui.id}`,)
        .addField('**Nombres de Membres**', `${gui.memberCount}`,)
        .setThumbnail(gui.iconURL({ dynamic: true }))
        .setFooter(`Hikari | Delete`, client.user.displayAvatarURL())
        client.guilds.cache.get(" ").channels.cache.get(" ").send(embed)
});
const init = async () => {
  const cmdFiles = await readdir("./commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach((f) => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });
  

  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach((file) => {
    const eventName = file.split(".")[0];
    client.logger.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  });
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }

};

init();

client.login(process.env.CLIENT_TOKEN);
