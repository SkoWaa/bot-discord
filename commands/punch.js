const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://thumbs.gfycat.com/AdoredPersonalDegus-size_restricted.gif", "https://thumbs.gfycat.com/BeautifulGregariousHare-size_restricted.gif", "https://thumbs.gfycat.com/TeemingMeekGrouse-size_restricted.gif", "https://media1.tenor.com/images/f441207f4ff06db0b451c4367cfdc2be/tenor.gif", "https://cdn.weeb.sh/images/SJvGvT-bf.gif", "https://cdn.weeb.sh/images/ByI7vTb-G.gif", "https://media1.tenor.com/images/9fc73d84755865fd0e8a67fe6fad9f0f/tenor.gif", "https://i.kym-cdn.com/photos/images/newsfeed/001/856/131/1af.gif", "https://media.tenor.com/images/b96f63d9382fe52cfe43feac4a8a40d6/tenor.gif", "https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif", "https://i.pinimg.com/originals/8d/50/60/8d50607e59db86b5afcc21304194ba57.gif", "https://media1.tenor.com/images/2e4ca8624e9ceeb9b71cfcf9a9371665/tenor.gif", "https://i.pinimg.com/originals/65/a1/3c/65a13cbd353bdcb0d13614f74e3f1ca2.gif"];
var image = Math.floor(Math.random() * images.length);

  if (!message.mentions.users.size) {
    let random = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} Donne un coup de poing a Hikari <:NUTNUT:752137550725906553> `)
      .setColor("#275BF0")
      .setImage(String([images[image]]))
    message.channel.send(random);
  }
  else
    message.mentions.users.forEach(user => {
      let random = new Discord.MessageEmbed()
        .setColor("#275BF0")
        .setTitle(`${message.author.username} Donne un coup de poing a ${user.username} <:NUTNUT:752137550725906553>`)
        .setTimestamp()
        .setColor("#275BF0")
        .setImage(String([images[image]]))
      message.channel.send(random);
    });
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["punch"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "punch",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "punch",
  };