const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.mentions.users.size) {
      const avatarembed = new Discord.MessageEmbed()
        .setColor("#275BF0")
        .setTitle('Votre avatar')
        .setImage(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
        .setTimestamp()
      message.channel.send(avatarembed);
    }
    else
      message.mentions.users.forEach(user => {
        const avatarembed2 = new Discord.MessageEmbed()
          .setColor("#275BF0")
          .setTimestamp()
          .setTitle(`Voici l\'avatar de : ${user.username}`)
          .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
        message.channel.send(avatarembed2);
      });
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["avatar", "pp"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "avatar",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "avatar",
  };