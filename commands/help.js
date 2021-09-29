const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  const embedCreated = new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/avatars/718502508363907142/b0d7497fd1dc1151c334ff81fc5b4d13.webp?size=512")
  .addField("Administration"," ``clear``, `inviteserv`, `ban`, `kick`,`mute`, `giveaway, g`, `sondage`  ")
  .addField("Hikari"," \`ping\`, \`status\`,\`hinfo\`, `report`,`invite`, `don`, `vote` ")
  .addField("Informations"," ``userinfo, ui``, ``serverinfo, si``, ``avatar, pp``  ")
  .addField("Gif"," `baka`,`blush`, `kiss`, `eat`, `smile`, `cry`, `hug`, `wasted`, `punch`, `cuddle`, `tickle`, `poke`,  ")
  .addField("Fun"," ``meme``, `8ball`,`ascii`,`love`,`reverse`, `weather`, `calcul`")
  .addField("Nsfw"," `lick`,`suck`, `fuck`, `ass`, `boobs`, `pussy`, `ahegao`")
  .addField("Lien"," [Invite](https://discordapp.com/oauth2/authorize?=&client_id=723275807987859506&scope=bot&permissions=8)")
  .setDescription("Mon prefix `$` ")
  .setColor('#275BF0')
  .setFooter("Hikari © ")

  .setTimestamp()

  message.channel.send({ embeds: [embedCreated]});
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp"],
  permLevel: "User",
};

exports.help = {
  name: "help",
  category: "**Bot**",
  description: "**Affiche toutes les commandes disponibles**",
  usage: "help",
};