const discord = require("discord.js");
const figlet = require("figlet");

exports.run = async (client, message, args) => {

let text = args.join(" ");
   if(!text) {
return message.channel.send(`S'il vous plait entrer un texte pour convertir en **ascii**`)
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send(`S'il vous plait entrer un texte avec pas plus de 20 caractères sinon la convertions ne seras pas bonne !`)
}
 
figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 

});
})

    };


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ascii"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "ascii",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "ascii",
  };