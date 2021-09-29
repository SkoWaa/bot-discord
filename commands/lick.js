const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://33.media.tumblr.com/bc0be6a74bdc4f73e49b9165dc209e30/tumblr_ncdmhb6U5d1revz5to1_500.gif", "https://31.media.tumblr.com/4ed051dd2cba627b01ba05cdebd01ac1/tumblr_njztck21Fd1revz5to1_500.gif", "https://x.imagefapusercontent.com/u/BrokenAngel/5699461/1641881411/tumblr_nrinuejURO1t8e3pho1_500.gif", "https://cdn011.bdsmlr.com/uploads/photos/2020/03/141519/bdsmlr-141519-kDmVznRdLW.gif", "https://cdn5-images.motherlessmedia.com/images/C45ABF2.gif", "https://thumb-p2.xhcdn.com/a/IG7uilNu24S4-NSehU3xRg/000/105/642/512_450.gif", "https://78.media.tumblr.com/b93f96e0fd514f8566e6943f1d9b174d/tumblr_p6ohxfkFOU1wnnmrvo1_500.gif", "https://thumb-p9.xhcdn.com/a/99_ty2F9oM_lAQJD4F-qRA/000/189/972/809_450.gif", "https://bestadultgifs.com/images/eating-pussy-3.gif", "https://38.media.tumblr.com/a78cd8acf93b8ef0bc4aa6e3a59da56c/tumblr_n6x4njHKkZ1rbii5ro1_500.gif"];
  var image = Math.floor(Math.random() * images.length);

    if (!message.mentions.users.size) {
      if (message.channel.nsfw === true) {
        let random = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Lèche Hikari `)
          .setColor("#275BF0")
          .setImage(String([images[image]]))
        message.channel.send(random);
      }
    }
    else
      message.mentions.users.forEach(user => {
        let random = new Discord.MessageEmbed()
          .setColor("#275BF0")
          .setTitle(`${message.author.username} Lèche ${user.username}`)
          .setTimestamp()
          .setColor("#275BF0")
          .setImage(String([images[image]]))
        message.channel.send(random);
      });
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["lick"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "lick",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "lick",
  };
