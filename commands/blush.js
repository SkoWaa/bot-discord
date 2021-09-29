const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://pa1.narvii.com/7381/304caf16afc4df18d27b0ac3b57478abf5fc614ar1-219-300_00.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943948917801010/tenor_12.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943948406226961/tumblr_mtc8n93I6I1rck5tco1_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943924410613851/tumblr_nf28d1DTy81rnc9k5o1_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943951472132106/tenor_11.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943954454282360/tenor_10.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943958023766107/giphy_11.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943961224151180/original_1.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943969205911708/32d1ba21f06fa86e8ba11113b5af8282759d1642_hq.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943974054395970/tumblr_niawogIszT1u55xnmo2_500.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943975996358846/giphy_9.gif", "https://cdn.discordapp.com/attachments/740262276589944832/751943982237614151/tenor_14.gif", "https://data.whicdn.com/images/220517925/original.gif", "https://media.tenor.com/images/5f737df63beee63857ce767a877547ff/tenor.gif", "https://thumbs.gfycat.com/ScientificWanIvorybilledwoodpecker-size_restricted.gif", "https://i.pinimg.com/originals/6d/d1/b8/6dd1b8fce171b5e8edff07613ba1c413.gif", "https://thumbs.gfycat.com/AmusingNaturalDragonfly-small.gif", "https://i.pinimg.com/originals/b7/4a/5b/b74a5b128b5d65ea1fdb9090c0b3f295.gif", "https://pa1.narvii.com/7381/304caf16afc4df18d27b0ac3b57478abf5fc614ar1-219-300_00.gif", "https://data.whicdn.com/images/220517925/original.gif", "https://media.tenor.com/images/5f737df63beee63857ce767a877547ff/tenor.gif", "https://thumbs.gfycat.com/ScientificWanIvorybilledwoodpecker-size_restricted.gif", "https://i.pinimg.com/originals/6d/d1/b8/6dd1b8fce171b5e8edff07613ba1c413.gif", "https://thumbs.gfycat.com/AmusingNaturalDragonfly-small.gif", "https://i.pinimg.com/originals/b7/4a/5b/b74a5b128b5d65ea1fdb9090c0b3f295.gif"];
  var image = Math.floor(Math.random() * images.length);

    if (!message.mentions.users.size) {
      let random = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Rougis a Hikari <a:blushcute:751944766450827345>`)
        .setColor("#275BF0")
        .setImage(String([images[image]]))
      message.channel.send(random);
    }
    else
      message.mentions.users.forEach(user => {
        let random = new Discord.MessageEmbed()
          .setColor("#275BF0")
          .setTitle(`${message.author.username} Rougis a ${user.username} <a:blushcute:751944766450827345> `)
          .setTimestamp()
          .setColor("#275BF0")
          .setImage(String([images[image]]))
        message.channel.send(random);
      });
    }
  

      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ["blush"],
        permLevel: "User",
      };
      
      exports.help = {
        name: "blush",
        category: "**Bot**",
        description: "**Affiche toutes les commandes disponibles**",
        usage: "blush",
      };