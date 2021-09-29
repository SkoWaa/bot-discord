const Discord = require("discord.js");

exports.run = async (client, message) => {

    var embed = new Discord.MessageEmbed()
    .setTitle("Si tu veux me soutenir en faisant un don :")
    .setDescription("**[Soutient moi en faisans un don](https://www.paypal.com/paypalme/SkoWaPRO)**")
    .setColor("#275BF0")
    .setTimestamp()
    .setFooter(message.author.username)
  message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["don","donate"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "donate",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "don",
  };