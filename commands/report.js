const Discord = require("discord.js")


exports.run = async (client, message) => {

  let args = message.content.split(" ").slice(1);
  let report = args.join(" ")
  message.delete()

  var embed = new Discord.MessageEmbed()
    .setTitle("Rapport de bug / suggestion bien envoyé.")
    .addField(' Liens','**[Invite](https://discord.com/api/oauth2/authorize?client_id=718502508363907142&permissions=8&scope=bot) | [Support](https://discord.gg/4gs38MS)**')
    .setColor("#275BF0")
    .setTimestamp()
    .setFooter(message.author.username)
  message.channel.send(embed)

  var embed1 = new Discord.MessageEmbed()
    .setTitle("Rapport de bug / suggestions")
    .setDescription(report)
    .setColor("#275BF0")
    .setTimestamp()
    .setFooter(message.author.username)
    client.channels.cache.get('762803594739056640').send(embed1);
}


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["report"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "report",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "report",
  };