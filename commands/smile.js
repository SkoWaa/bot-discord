const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 
 var images = ["https://i.pinimg.com/originals/7e/b0/1e/7eb01e06cb6f4b1c995243ec18ffb6e1.gif", "https://data.photofunky.net/output/image/6/0/3/5/60352c/photofunky.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751942625824866304/tenor_3.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751942629599740084/giphy_6.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751942637048561804/tumblr_fd4f687434b29add1006f4c5ad72c191_e91ab2ef_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751942644598308894/cf24459e330fa30d14c8993d4911a51feafb9b50_hq.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751942652353708143/tenor_6.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751942661748818000/tenor_4.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751942670095482910/giphy_7.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751942634833969273/anime-girl-smiling-gif-11.gif", "https://media.tenor.com/images/d8cfad6474c16477362df878df5aba70/tenor.gif", "https://thumbs.gfycat.com/FelineBestCornsnake-size_restricted.gif", "https://media1.tenor.com/images/6fcfbab36f6d2c578abd6228d1e74231/tenor.gif", "https://i.skyrock.net/2084/89092084/pics/3234043525_1_7_wUJSOGyQ.gif", "https://media3.giphy.com/media/gnMoriDhYLVKg/giphy.gif?cid=790b76115d0a42474c57765967593a1b&rid=giphy.gif", "https://gifimage.net/wp-content/uploads/2018/05/sound-euphonium-gif-9.gif", "https://i.pinimg.com/originals/46/ff/52/46ff5269ce921e85c63c3d8adbad058c.gif", "https://i.pinimg.com/originals/7e/b0/1e/7eb01e06cb6f4b1c995243ec18ffb6e1.gif", "https://media.tenor.com/images/d8cfad6474c16477362df878df5aba70/tenor.gif", "https://thumbs.gfycat.com/FelineBestCornsnake-size_restricted.gif", "https://media1.tenor.com/images/6fcfbab36f6d2c578abd6228d1e74231/tenor.gif", "https://i.skyrock.net/2084/89092084/pics/3234043525_1_7_wUJSOGyQ.gif", "https://media3.giphy.com/media/gnMoriDhYLVKg/giphy.gif?cid=790b76115d0a42474c57765967593a1b&rid=giphy.gif", "https://gifimage.net/wp-content/uploads/2018/05/sound-euphonium-gif-9.gif", "https://i.pinimg.com/originals/46/ff/52/46ff5269ce921e85c63c3d8adbad058c.gif"];
  var image = Math.floor(Math.random() * images.length);

    if (!message.mentions.users.size) {
      let random = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Souris a Hikari <:kukuutwa:751944468369899540>`)
        .setColor("RANDOM")
        .setImage(String([images[image]]))
      message.channel.send(random);
    }
    else
      message.mentions.users.forEach(user => {
        let random = new Discord.MessageEmbed()
          .setColor("#275BF0")
          .setTitle(`${message.author.username} Souris a ${user.username} <:kukuutwa:751944468369899540>`)
          .setTimestamp()
          .setColor("#275BF0")
          .setImage(String([images[image]]))
        message.channel.send(random);
      });
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["smile"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "smile",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "smile",
  };