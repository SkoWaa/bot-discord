const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var images = ["https://commentseduire.net/wp-content/uploads/2017/06/hentai-gif-18.gif", "https://commentseduire.net/wp-content/uploads/2017/06/hentai-gif-19.gif", "https://www.pornologie.fr/wp-content/uploads/2019/10/Hentai-11.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-19-1.gif", "https://www.rencontresanslendemain.net/wp-content/uploads/2018/02/sexe-debout-gif-hentai.gif", "https://commentseduire.net/wp-content/uploads/2017/06/hentai-gif-18.gif", "https://www.rencontresanslendemain.net/wp-content/uploads/2018/02/gifs-hentai.gif"];
  var image = Math.floor(Math.random() * images.length);

    if (message.channel.nsfw === true) {
      let random = new Discord.MessageEmbed()
        .setTitle(`La commande hentai a bien était effectué !`)
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor("#275BF0")
        .setImage(String([images[image]]))

      message.channel.send(random);
    }
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["hentai"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "hentai",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "hentai",
  };