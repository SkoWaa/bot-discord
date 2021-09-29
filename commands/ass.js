const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://img-4.poringa.net/poringa/img/1/A/7/0/D/3/Xataca/47D.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752971860429242428/DyI4-a7W0AILY9s.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752972073323724850/IMG_20200809_230009.jpg", "https://img-7.poringa.net/poringa/img/4/1/9/6/2/0/kelvinflow/EC4.jpg", "https://pbs.twimg.com/profile_images/1158633344399282176/DEx4-kRg_400x400.jpg", "https://thumb-p6.xhcdn.com/a/83uj90mtPbUMSMDTOenRcg/000/205/528/106_1000.jpg", "https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/83/2c/3d/832c3de582ffff5e1993dd5cde12d000/832c3de582ffff5e1993dd5cde12d000.12.jpg", "https://namethatporn.com/media/displays/2018/03/16/VJOPEG4IKCB9Q_whats-the-name-of-this-porn-star.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970154677108926/Dzeas-JWwAorSGW.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970158607171624/DzQ-mgtWkAAJ2HX.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970156858278048/DzjksBXXQAAo7Rq.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970160947855400/DzxbyXdX0AA-y-4.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970212466491402/D0EDu1HWoAAsMyq.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970221161283644/D0IFgp0WoAAZi3P.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970292921368616/D02EnASX4AA2uHW.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970376375697479/DzcZUs_W0AEsDwI.jpg", "https://cdn.discordapp.com/attachments/740262276589944832/752970930019369020/unknown.png",];
  var image = Math.floor(Math.random() * images.length);

    if (message.channel.nsfw === true) {
      let random = new Discord.MessageEmbed()
        .setTitle(`La commande ass a bien était effectué !`)
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor("#275BF0")
        .setImage(String([images[image]]))

      message.channel.send(random);
    }
  }


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ass"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "ass",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "ass",
  };