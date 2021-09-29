const Discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, message, args) => {

  var images = ["https://content4.nakedneighbour.com/watch4beauty.com/3139/09.jpg", "https://static-ca-cdn.eporner.com/photos/520504.jpg", "https://i.imgur.com/B2g1ouh.jpg", "https://static-ca-cdn.eporner.com/photos/383088.jpg", "https://static-ca-cdn.eporner.com/photos/213037.jpg", "https://contenta.novoglam.com/hollyrandall.com/1282/tn_01.jpg", "https://contenta.novoglam.com/hollyrandall.com/1282/tn_01.jpg", "https://cdn.pornpics.com/pics1/2019-12-10/636486_07big.jpg", "https://img.pornpics.com/460/2019-12-10/636486_13.jpg", "https://xxxpornozone.com/xxx/nude-perfect-pussy-slit.jpg", "https://celebjihad.com/celeb-jihad/images/selena_gomez_spread_eagle.jpg", "https://www.freexcafe.com/content/thumbs/Yk/622505.jpg"];
  var image = Math.floor(Math.random() * images.length);

    if (message.channel.nsfw === true) {
      let random = new Discord.MessageEmbed()
        .setTitle(`La commande Pussy a bien était effectué !`)
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor("#275BF0")
        .setImage(String([images[image]]))

      message.channel.send(random);
    }
  }


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["pussy"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "pussy",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "pussy",
  };