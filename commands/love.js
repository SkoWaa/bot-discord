const {MessageEmbed} = require('discord.js');

exports.run = async (client, message, args) => {
// Get a member from mention, id, or username
let user = message.mentions.users.first() || message.author;

const love = Math.random() * 100;
const loveIndex = Math.floor(love / 10);
const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

const embed = new MessageEmbed()
    .setColor("#275BF0")
    .addField(`☁ **${message.author.username}** Aimes **${user.username}** à :`,
    `💟 ${Math.floor(love)}%\n\n${loveLevel}`)
    .setTimestamp()
    .setFooter(`${user.username}`);
message.channel.send({embed: embed});
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["love"],
    permLevel: "User",
};

exports.help = {
    name: "love",
    category: "Bot",
    description: "Affiche toutes les commandes disponibles",
    usage: "love",
};