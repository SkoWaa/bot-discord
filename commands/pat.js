const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://cdn.discordapp.com/attachments/740262276589944832/753226557958520892/tumblr_n7t4ioLycK1rbnx7io1_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753226523598651422/sLwoifL.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753226510361559060/tumblr_myki5bzz0U1shdfeho1_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753226516145504256/tenor_23.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753226549393752114/pattt.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753226534508036116/anime-pat-gif-2.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753226534705299526/tumblr_mpfy232F4j1rxrpjzo1_r2_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753226570709205043/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753226572378538134/tumblr_omvkl2SzeK1ql0375o1_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753226578321997864/tumblr_myjkrtEIFl1rlnwhso1_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753226587339620422/tumblr_nxjapoyGms1u86t2qo1_540.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753226593639333998/tenor_24.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753227360324812920/tumblr_15d0aea9d4047360cdd8cf507dace830_5b3f9052_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753227362736537741/bDMMk0L.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753227373457047582/tumblr_af9b7c5d320b0a7bacaf38a69dc7e9c6_9cf3c090_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753227378255462451/tenor_26.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753227385096372234/tumblr_001a5ebdf9fcb4dbfb23e7de8473360f_7e8109fa_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753227400254324796/tumblr_60326910955b49a1c9fa1d5d077e686c_c2cc37fc_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753227401290580049/original_2.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753227399856128030/1564488223_a06d65ad49f019aaae3f30fb872df619.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753227399600013423/tumblr_61d1530a2956042047e0e47e26d3c5d3_aec0ce47_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/753227400493400084/giphy_19.gif",];
  var image = Math.floor(Math.random() * images.length);

    if (!message.mentions.users.size) {
      let random = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Pat sur la petite tête de Hikari <:kukuutwa:751944468369899540>`)
        .setColor('#275BF0')
        .setImage(String([images[image]]))
      message.channel.send(random);
    }
    else
      message.mentions.users.forEach(user => {
        let random = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Pat sur la petite tête de ${user.username} <:kukuutwa:751944468369899540>`)
          .setTimestamp()
          .setColor('#275BF0')
          .setImage(String([images[image]]))
        message.channel.send(random);
      });
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["pat"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "pat",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "pat",
  };