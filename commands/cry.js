const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://data.whicdn.com/images/255870233/original.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751941596068446228/giphy_5.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751941600300630087/tenor_2.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751941614724841632/tenor_1.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751941618872877136/552760230b09bb15c5c1bf3d5ac26a82.gif", "https://gif-finder.com/wp-content/uploads/2015/07/Anime-girl-crying.gif", "https://4.bp.blogspot.com/-1nUit0tg5HY/Ws84UT7XPEI/AAAAAAAAIXk/FsFii08vTEYYvKDYWrcZBpwGXeMXtlpkgCLcBGAs/s1600/ff282fc9be15259038a84650e7a83487.gif", "https://ekladata.com/1IEo7UQlGQXQ5vlrUVjuwx7GbgM.gif", "https://i.gifer.com/WWEL.gif", "https://media0.giphy.com/media/mvRwcoCJ9kGTS/giphy.gif", "https://media3.giphy.com/media/ROF8OQvDmxytW/giphy.gif", "https://i.pinimg.com/originals/4b/5e/98/4b5e9867209d7b1712607958e01a80f1.gif", "https://i.pinimg.com/originals/73/3d/59/733d5948098702b0d6f156819143b581.gif"];
var image = Math.floor(Math.random() * images.length);

  if (!message.mentions.users.size) {
    let random = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} Pleure a Hikari <a:cutecry:751940472229855234>`)
      .setColor("#275BF0")
      .setImage(String([images[image]]))
    message.channel.send(random);
  }
  else
    message.mentions.users.forEach(user => {
      let random = new Discord.MessageEmbed()
        .setColor("#275BF0")
        .setTitle(`${message.author.username} Pleure devant ${user.username} <a:cutecry:751940472229855234> `)
        .setTimestamp()
        .setColor("#275BF0")
        .setImage(String([images[image]]))
      message.channel.send(random);
    });
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["cry"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "cry",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "cry",
  };