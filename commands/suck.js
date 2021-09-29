const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://www.blowjobgif.net/albums/2018/11/12/1/1/suck-my-small-dick.gif", "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-ballsucking-69.gif", "https://24.media.tumblr.com/0bd68b04e9ac63376d4b0a7667109ea7/tumblr_n4x4uyK5x61revz5to3_500.gif", "https://24.media.tumblr.com/188c2c586d818c2777fd68efd0b6f5c0/tumblr_msdk4yzOih1s7ch8qo3_400.gif", "https://www.jeuporno.fr/wp-content/uploads/2019/10/porno-pipe-11.gif", "https://thumb-p1.xhcdn.com/a/tEUDiCOJj_2leXO8QHmiSg/000/113/108/751_450.gif", "https://67.media.tumblr.com/2400a886f7c2ecd148774c12bfe77d75/tumblr_o6xor3JUAo1revz5to1_500.gif", "https://i.imgur.com/E0kRCRC.gif", "https://i.imgbox.com/u38c3aYn.gif", "https://blowjobgif.net/albums/2018/07/21/19/1/christen-courtney-teenslikeitbig.gif", "https://thumb-p7.xhcdn.com/a/WaXzk905Bw4vdrwpB5bzwQ/000/163/256/627_450.gif", "https://thumb-p9.xhcdn.com/a/witwx3gnAV_7n1-XQAHrHQ/000/176/840/429_450.gif", "https://www.biographics.eu/image/714406501738b77d0b30683222929f1a.gif"];
  var image = Math.floor(Math.random() * images.length);

    if (!message.mentions.users.size) {
      if (message.channel.nsfw === true) {
        let random = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Suce Hikari `)
          .setColor("#275BF0")
          .setImage(String([images[image]]))
        message.channel.send(random);
      }
    }
    else
      message.mentions.users.forEach(user => {
        let random = new Discord.MessageEmbed()
          .setColor("#275BF0")
          .setTitle(`${message.author.username} Suce ${user.username}`)
          .setTimestamp()
          .setColor("#275BF0")
          .setImage(String([images[image]]))
        message.channel.send(random);
      });
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["suck"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "suck",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "suck",
  };