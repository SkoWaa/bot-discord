const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://cdn.discordapp.com/attachments/740262276589944832/751947070054858873/tumblr_nvcqiepLGJ1uv28x7o1_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947073750040576/11e01b02a863643bc41effbdfc950013f411f7c1_hq.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947078296666182/tumblr_ongtpaHPm21ve6j3no3_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947084965609602/f994370fd77d41d938ca41f14f2bae6a716fb18f_hq.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947088253812856/giphy_17.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947107421913088/68de970c1ed9f7e5962061616b3d1353a2658fde_hq.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947112517730324/tumblr_4afe55c0c45a8a71d6da5b7e07f4e1b0_e1e52aa6_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947111771144212/tenor_21.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947123490160750/anime-hug-kiss-gif-9.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947131526447204/tumblr_nztg668wB31ttclrpo7_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947132805840956/giphy_16.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947147816992818/tumblr_mkmic2yH0C1rk7ei4o1_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947150195425310/anime-french-kiss-gif-10.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947161213599814/tumblr_b09cdef1c40052639226260db30672a7_6cda7bd1_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947161398280243/tumblr_ondnwdZAUI1ve6j3no3_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751947161968574554/tenor_20.gif",];
  var image = Math.floor(Math.random() * images.length);

    if (!message.mentions.users.size) {
      let random = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Fais un bisou a Hikari <a:SkoWaKissKura:751948958640767078>`)
        .setColor('#275BF0')
        .setImage(String([images[image]]))
      message.channel.send(random);
    }
    else
      message.mentions.users.forEach(user => {
        let random = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Fais un bisou a ${user.username} <a:SkoWaKissKura:751948958640767078>`)
          .setTimestamp()
          .setColor('#275BF0')
          .setImage(String([images[image]]))
        message.channel.send(random);
      });
  }


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kiss"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "kiss",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "kiss",
  };