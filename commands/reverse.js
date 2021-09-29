const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  const text = args.join();
  if(!text) return message.channel.send("Veuillez préciser un texte !")
  if(text.length < 1) return message.channel.send("BAKA, COMMENT JE PEUX INVERSER 0 MOT !")
  const converted = text.split('').reverse().join('');
  message.channel.send(`\u180E${converted}`);
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["reverse"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "reverse",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "reverse",
  };