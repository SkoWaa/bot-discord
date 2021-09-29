const { MessageEmbed } = require("discord.js")
const pic = require('nekos.life')
const neko = new pic()

exports.run = async (client, message, args) => {

if (message.mentions.members.size === 0) {
    const GIF = await neko.sfw.poke();
    const embed = new MessageEmbed()
    .setColor('RED')
    .setTitle(`${message.author.tag} Ce poke sois même est-ce possible ? `)
    .setImage("https://media1.tenor.com/images/66fa8b15323d4d07faa8ae2f545ccfa3/tenor.gif?itemid=14054049")
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
    message.channel.send(embed);

    } else {

    const member = message.mentions.members.first();
    const GIF = await neko.sfw.poke();
    const embed = new MessageEmbed()
    .setColor('#275BF0')
    .setTitle(`${message.author.tag} poke ${member.user.tag}`)
    .setImage(GIF.url)
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
    message.channel.send(embed);
    }
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["poke"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "poke",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "poke",
  };