const { MessageEmbed } = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {

const no = new MessageEmbed()
if (!message.member.hasPermission('ADMINISTRATOR')) {
    return message.channel.send(no.setDescription('<:tuveuxquoi:764228417092321340> | Vous n\'avez pas la permissions pour faire cet commande ').setColor('RED')).then(m => m.delete({timeout: 10000}));
    };


if (!args[0]) return message.channel.send(no.setDescription(`<:tuveuxquoi:764228417092321340> | Vous n'avez pas spécifié de temps !`).setColor("RED"));
if (
  !args[0].endsWith("d") &&
  !args[0].endsWith("h") &&
  !args[0].endsWith("m") &&
  !args[0].endsWith("s")
)

  return message.channel.send(no.setDescription(`<:tuveuxquoi:764228417092321340> |Vous n'avez pas utilisé le bon formatage pour le temps !`).setColor('RED'));

if (isNaN(args[0][0])) return message.channel.send(no.setDescription(`<:tuveuxquoi:764228417092321340> | Ce n'est pas un nombre !`).setColor('RED'));
let channel = message.mentions.channels.first();
if (!channel)
  return message.channel.send(no.setDescription(`<:tuveuxquoi:764228417092321340> |Ce channel n'éxiste pas !`).setColor('RED'));
let prize = args.slice(2).join(" ");
if (!prize) return message.channel.send(no.setDescription(`<:tuveuxquoi:764228417092321340> | Aucun prix n'a était spécifié `).setColor('RED'));
message.channel.send(`*Giveaway crée dans : ${channel}*`);
let Embed = new MessageEmbed()
  .setTitle(`Nouveau giveaway ! :tada:`)
  .setDescription(
    `**Host par:** ${message.author}\n**Prix:** ${prize}`
  )
  .setTimestamp(Date.now() + ms(args[0]))
  .setColor(`BLUE`);
let m = await channel.send(Embed);
m.react("🎉");
setTimeout(() => {
  if (m.reactions.cache.get("🎉").count <= 1) {
    message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
    return message.channel.send(no.setDescription(`<:tuveuxquoi:764228417092321340> | Pas assez de gens on participé pour que je puissent désigné un gagnat !`).setColor('RED'));
  }
  let le = new MessageEmbed()
  let winner = m.reactions.cache
    .get("🎉")
    .users.cache.filter((u) => !u.bot)
    .random();
  channel.send(le.setDescription(`**Prix:** ${prize}\n**Gagnant:** ${winner}`).setColor('BLUE'));
}, ms(args[0]));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["giveaways","g"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "giveaways",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "giveaways",
  };