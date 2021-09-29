const Discord = require("discord.js");

exports.run = async (client, message) => {

    var embed = new Discord.MessageEmbed()
    .setTitle("N'oublie pas de voter !")
    .setDescription('**[vote](https://discordbotlist.com/bots/hikari) | [Support](https://discord.gg/WDEgRUrydU)**')
    .setColor("#275BF0")
    .setTimestamp()
    .setFooter(message.author.username)
  message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["vote"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "vote",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "vote",
  };