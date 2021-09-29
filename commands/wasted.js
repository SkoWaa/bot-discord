const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://i.gifer.com/8mtK.gif", "https://i.imgur.com/VM0TwyH.gif", "https://cdn.weeb.sh/images/B1qosktwb.gif", "https://i.kym-cdn.com/photos/images/newsfeed/001/160/891/6d2.gif", "https://i.kym-cdn.com/photos/images/original/000/878/461/075.gif", "https://i.pinimg.com/originals/28/35/0f/28350f78104e224f2c4ba1ede9798040.gif"];
  var image = Math.floor(Math.random() * images.length);

    if (!message.mentions.users.size) {
      let random = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Tue Hikari <:pikagun:658682264560992267>`)
        .setColor("RANDOM")
        .setImage(String([images[image]]))
      message.channel.send(random);
    }
    else
      message.mentions.users.forEach(user => {
        let random = new Discord.MessageEmbed()
          .setColor("#275BF0")
          .setTitle(`${message.author.username} à tué ${user.username} <:pikagun:658682264560992267> `)
          .setTimestamp()
          .setColor("#275BF0")
          .setImage(String([images[image]]))
        message.channel.send(random);
      });
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["wasted"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "wasted",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "wasted",
  };