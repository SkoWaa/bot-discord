const Discord = require("discord.js");

exports.run = async (client, message, args ) => {

    var embed = new Discord.MessageEmbed()
    .setAuthor("Voici les informations du bot Hikari.")
    .addFields(
      { name: '➢ ID', value: "718502508363907142", inline: true },
      { name: '➢ Nom', value: "Hikari", inline: true },
      { name: '➢ Tag', value: '#7834', inline: true },
      { name: '➢ Librairie', value: "Discord.js", inline: true },
      { name: "➢ Prefix", value: '$', inline: true },
      { name: '➢ Owner:', value: "<@557248789962817564>", inline: true },
      { name: '\u200B', value: '\u200B' },
      { name: "En cas de problème ou de suggestions rejoignez le serveur", value: "[Support](https://discord.gg/WDEgRUrydU)", inline: true },
    )
    .setColor("#275BF0")
  message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["hinfo","Hi"],
    permLevel: "User",
};

exports.help = {
    name: "hinfo",
    category: "Bot",
    description: "Affiche toutes les commandes disponibles",
    usage: "hinfo",
};
