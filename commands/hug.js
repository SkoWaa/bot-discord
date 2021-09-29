const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://thumbs.gfycat.com/FondDelectableBrownbear-size_restricted.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751945179371536454/tenor_15.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751945191857848361/tenor_19.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751945193879634000/ImperfectFabulousBluewhale-max-1mb.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751945203224674324/tenor_18.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751945221977145344/giphy_14.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751945227723604038/EDUGM7x.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751945227723604038/EDUGM7x.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751945229606715432/tenor_17.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751945229963100302/giphy_13.gif", "https://acegif.com/wp-content/uploads/anime-hug.gif", "https://i.pinimg.com/originals/02/7e/0a/027e0ab608f8b84a25b2d2b1d223edec.gif", "https://i.pinimg.com/originals/f9/e9/34/f9e934cddfd6fefe0079ab559ef32ab4.gif", "https://i.pinimg.com/originals/d8/98/f0/d898f03bbd8b22b272c9ddffbdb2fe28.gif", "https://media.tenor.com/images/0abe1090ab9874c62c4baaac18f0994d/tenor.gif"];
  var image = Math.floor(Math.random() * images.length);

    if (!message.mentions.users.size) {
      let random = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Fais un câlin a Hikari <a:calinnnn:751942344571486318>`)
        .setColor('#000000')
        .setImage(String([images[image]]))
      message.channel.send(random);
    }
    else
      message.mentions.users.forEach(user => {
        let random = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Fais un câlin a ${user.username} <a:calinnnn:751942344571486318>`)
          .setTimestamp()
          .setColor('#000000')
          .setImage(String([images[image]]))
        message.channel.send(random);
      });
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["hug"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "hug",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "hug",
  };