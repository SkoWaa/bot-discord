const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://24.media.tumblr.com/tumblr_mduhdd6vIj1r3si7eo1_500.gif", "https://static-ca-cdn.eporner.com/photos/197672.gif", "https://sexwall.me/media/2013/09/3650085-that-gifted-guy-is-making-love-with-this-sexy-woman-and-she-is.gif", "https://cdn5-images.motherlessmedia.com/images/DABA326.gif", "https://cdn5-images.motherlessmedia.com/images/C97365A.gif", "https://33.media.tumblr.com/4c5b58388e4574df34b20b5e974b3cd2/tumblr_nlijgmFlcV1revz5to1_500.gif", "https://static-ca-cdn.eporner.com/photos/820569.gif", "https://thumb-p5.xhcdn.com/a/qP6ek4vXzyaSg_e49d8YSA/000/109/572/755_450.gif", "https://sexwall.me/media/2013/09/36546.gif"];
  var image = Math.floor(Math.random() * images.length);

    if (!message.mentions.users.size) {
      if (message.channel.nsfw === true) {
        let random = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Fais l'amour a Hikari `)
          .setColor("#275BF0")
          .setImage(String([images[image]]))
        message.channel.send(random);
      }
    }
    else
      message.mentions.users.forEach(user => {
        let random = new Discord.MessageEmbed()
          .setColor("#275BF0")
          .setTitle(`${message.author.username} Fais l'amour a ${user.username}`)
          .setTimestamp()
          .setColor("#275BF0")
          .setImage(String([images[image]]))
        message.channel.send(random);
      });
  }


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["fuck"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "fuck",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "fuck",
  };