const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://teatrvmeste.ru/video-jav/photos/thumbs/pic-6-kayden-kross-925895.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970154987487430/DzjAXLaXgAUh_wg.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970157441286377/DzoZc2WW0AMoBPy.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970306603319306/D4YKXBnX4AICRK7.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970631955349695/unknown.png", "https://i.redd.it/y63r2yapvhd21.jpg", "https://i.redd.it/8vs11ob9nuk41.jpg", "https://media.sinblr.com/sinblr/media_attachments/files/006/029/444/original/bcdeab4f766a6948.png", "https://w1680.luscious.net/249/lusciousnet_tumblr_n2j57034ro1rlgue_71563449.jpg", "https://i.imgur.com/fH4elZk.jpg", "https://pillowfortmedia.s3.amazonaws.com/posts/83481d87cce9_tumblr_pdiypr0z6f1rzlp0po1_1280.jpg", "https://i.imgur.com/31dJtpN.jpg", "https://static-ca-cdn.eporner.com/photos/545570.jpg", "https://www.realteengirls.com/wp-content/uploads/2008/09/302_05.jpg", "https://i.pinimg.com/originals/95/8f/7e/958f7e2daec44d94e4eb2d0e00f97760.jpg", "https://cdn.nakedteengirls.org/girls/thumbs/yd/232454.jpg", "https://pbs.twimg.com/profile_images/926578946757373952/rqe2EHGN.jpg", "https://nudewebcam.live/naked-girls-web-cams.jpg", "https://adultwalls.com/wallpapers/sexy-pussy-hd-nude-girl-naked-wallpaper/download/1600x900.jpg", "https://hs1.nudebabe.pictures/content/0/134_super_of.jpg", "https://static-ca-cdn.eporner.com/photos/226617.jpg", "https://southsouthcases.info/imgs/3bfb9dd20dbe58359296a45a7a0a26a5.jpg", "https://ftopx.com/large/201708/598b07b54d966.png", "https://pbs.twimg.com/media/Bt0iYuuCQAEFzGl.jpg"];
var image = Math.floor(Math.random() * images.length);

  if (message.channel.nsfw === true) {
    let random = new Discord.MessageEmbed()
      .setTitle(`La commande Boobs a bien était effectué !`)
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setColor("#275BF0")
      .setImage(String([images[image]]))

    message.channel.send(random);
  }
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["boobs"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "boobs",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "boobs",
  };