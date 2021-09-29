const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let reason = args.join(' ');
  let yes = new Discord.MessageEmbed()
  if (reason.length < 1) return message.channel.send(yes.setDescription('<:tuveuxquoi:764228417092321340> | Veuillez me fournir une question.').setColor('RED'));
  var ball = ['Bien-sur.', 'Pas du tout.', 'Aucune chance.', 'Surement..', 'Impossible !.',' Concentre toi..', ' C\'est oui. ', 'Non.', 'Aucun', 'Au lieu de poser des questions idiote invite moi sur ton serveur.', 'Mes sources dise que non.', 'Apparemment oui. (nan en vraie je sais pas)', 'C\'est évident ', 'J\'ai dis non tu comprend ? ', 'Redemande moi plus tard je suis occupé la ', 'Tu me soul..', 'heu, t ki ? '];

  const embed = new Discord.MessageEmbed()
  .setColor('#275BF0')
  .addField("Votre question", reason)
  .addField("8ball a dis", ball[Math.floor(Math.random () * ball.length)])
  .setThumbnail("https://store-images.s-microsoft.com/image/apps.3347.14018933745651278.387c4f72-122e-45bc-ad23-8f4e5b0dafd9.9ab48a51-bf95-4ab2-9e26-f894042a7db8?mode=scale&q=90&h=200&w=200&background=%230078D7")
  message.channel.send(embed);
  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["8ball"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "8ball",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "8ball",
  };