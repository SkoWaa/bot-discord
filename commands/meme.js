const { Random } = require("something-random-on-discord")
const random = new Random();

exports.run = async (client, message, args) => {

let data = await random.getMeme()
message.channel.send(data)
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["meme"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "meme",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "meme",
  };