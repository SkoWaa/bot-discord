const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://i.pinimg.com/originals/fe/f7/cc/fef7ccacb74b0582ef0d233ebd53901f.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943201111146516/giphy_8.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943206484312124/tumblr_static_eg2nej1dedk4cowc4scoc4sok.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943230869995550/tenor_8.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943236578181130/tumblr_ogol4xsDBg1uxvvvzo1_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943253720432757/40d7ce370ab5ebe91a2ca6d0f82111517d5af8f8_hq.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943254374875296/ochako-uraraka-gif-13.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943263081988196/1484860600_tumblr_o8tv19IPel1twrse4o1_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943267477880842/anigif_sub-buzz-17586-1537224963-1.gif", "https://i.pinimg.com/originals/56/65/4e/56654eb38f6ed08f81ebd395e98197ac.gif", "https://thumbs.gfycat.com/BeautifulGargantuanAustraliancurlew-size_restricted.gif", "https://data.whicdn.com/images/69689978/original.gif", "https://pa1.narvii.com/6484/90c0386b40bc151f5f92eb5d2d8b051227de6ab8_hq.gif", "https://cdn.lowgif.com/full/ff66a929575460be-anime-girl-eating-gif-1-gif-images-download.gif", "https://i.gifer.com/5HsF.gif"];
  var image = Math.floor(Math.random() * images.length);

    if (!message.mentions.users.size) {
      let random = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Mange Hikari <a:02Eat:756544109744881685>`)
        .setColor('#000000')
        .setImage(String([images[image]]))
      message.channel.send(random);
    }
    else
      message.mentions.users.forEach(user => {
        let random = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Mange ${user.username} <a:02Eat:756544109744881685>`)
          .setTimestamp()
          .setColor('#000000')
          .setImage(String([images[image]]))
        message.channel.send(random);
      });
  }


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["eat"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "eat",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "eat",
  };