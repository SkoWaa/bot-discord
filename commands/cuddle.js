const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://37.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif", "https://i.pinimg.com/originals/c6/3a/48/c63a48856edab67f2e5c9b9c8a10d21e.gif", "https://media.giphy.com/media/l97JVFR42GLWE/giphy.gif", "https://cdn.weeb.sh/images/Hyxo1CFtb.gif", "https://cdn.weeb.sh/images/H1SfI8XwW.gif", "https://i.gifer.com/CzCS.gif", "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif", "https://media1.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif", "https://thumbs.gfycat.com/AlienatedEmbarrassedBullfrog-size_restricted.gif", "https://pa1.narvii.com/7002/0d18a2a7c78f4dad44fe1498573c206916d808a0r1-444-250_hq.gif", "https://33.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif", "https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif"];
  var image = Math.floor(Math.random() * images.length);

    if (!message.mentions.users.size) {
      let random = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Réconforte Hikari <a:idk:753247335827636266>`)
        .setColor("#275BF0")
        .setImage(String([images[image]]))
      message.channel.send(random);
    }
    else
      message.mentions.users.forEach(user => {
        let random = new Discord.MessageEmbed()
          .setColor("#275BF0")
          .setTitle(`${message.author.username} Réconforte ${user.username} <a:idk:753247335827636266> `)
          .setTimestamp()
          .setColor("#275BF0")
          .setImage(String([images[image]]))
        message.channel.send(random);
      });
  }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["cuddle"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "cuddle",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "cuddle",
  };