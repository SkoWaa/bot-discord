const Discord = require("discord.js");

exports.run = async (client, message, args) => {

if (message.deletable) {
    message.delete();
}

// Member doesn't have permissions
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply("Vous ne pouvez pas supprimé de message..").then(m => m.delete(5000));
}

// Check if args[0] is a number
if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
    return message.reply("Heu... êtes vous sur que c'est un nombre..?").then(m => m.delete(5000));
}

// Maybe the bot can't delete messages
if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    return message.reply("Désolé je ne peux pas supprimé de message..").then(m => m.delete(5000));
}

let deleteAmount;

if (parseInt(args[0]) > 100) {
    deleteAmount = 100;
} else {
    deleteAmount = parseInt(args[0]);
}

message.channel.bulkDelete(deleteAmount, true)
    .then(deleted => message.channel.send(`J'ai supprimé \`${deleted.size}\` messages.`))
    .catch(err => message.reply(`Aïe petite erreur.. ${err}`));
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["clear"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "clear",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "clear",
  };