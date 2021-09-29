const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://cdn.discordapp.com/attachments/651850454543892481/662079009693106189/image0.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/664966821765578754/image1.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/664966821765578752/image0.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/684805491993739364/prev1_1.jpeg", "https://cdn.discordapp.com/attachments/651850454543892481/686906697725509644/prev1_4.jpeg", "https://cdn.discordapp.com/attachments/651850454543892481/699882883552116836/IMG_20200414_201408_721.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/716977682247581706/image0.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/724599678460493925/image0.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/724757140585316412/image0.png", "https://cdn.discordapp.com/attachments/651850454543892481/729956374615818280/image0.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/730957521350819880/image0.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/732552573592141854/IMG_20200702_004045_3042.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/735845010326683818/2020-07-22_21_37_26.559-0700.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/742410208101531738/IMG_20200810_185201_083.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/745687678124818583/image0.png", "https://cdn.discordapp.com/attachments/651850454543892481/748290187087577208/image0.jpg", "https://cdn.discordapp.com/attachments/651850454543892481/748446882195439646/image0.jpg", "https://nudetanlines.sbgefree.org/files/2018/09/nude-tan-lines-image085-825x510.jpg", "https://i.redd.it/y5tqgx0h2p051.jpg", "https://w315.luscious.net/calamitycumsxdd/316218/dpq5tml_01CYAZ4XQR4HKH0CXCF2KA6EM3.315x0.jpg",];
  var image = Math.floor(Math.random() * images.length);

    if (message.channel.nsfw === true) {
      let random = new Discord.MessageEmbed()
        .setTitle(`Voici une bonne Nude`)
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor("#275BF0")
        .setImage(String([images[image]]))

      message.channel.send(random);
    }
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["nude"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "nude",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "nude",
  };