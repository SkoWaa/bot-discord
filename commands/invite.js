const Discord = require("discord.js");

exports.run = async (client, message) => {

    var embed = new Discord.MessageEmbed()
    .setTitle("Invite moi")
    .setDescription('**[Invite](https://discord.com/api/oauth2/authorize?client_id=718502508363907142&permissions=8&scope=bot) | [Support](https://discord.gg/4gs38MS)**')
    .setColor("#275BF0")
    .setTimestamp()
    .setFooter(message.author.username)
  message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["invite"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "invite",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "invite",
  };