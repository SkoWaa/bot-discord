const Discord = require("discord.js")


exports.run = async (client, message) => {

  let args = message.content.split(" ").slice(1);
  let sondage = args.join(" ")
  message.delete()

  if (!message.member.permissions.has("ADMINISTRATOR")) {
    let nopermsembed = new Discord.MessageEmbed()
      .setDescription(
        "Vous n'avez pas la permission `ADMINISTRATOR` pour exécuté cet commande"
      )
      .setColor("#275BF0");
    message.channel.send(nopermsembed);

    return;
  }

  var embed = new Discord.MessageEmbed()
    .setTitle(sondage)
    .setDescription(' réagisser avec les réactions ci-dessous')
    .setColor("#275BF0")
    .setTimestamp()
    .setFooter(message.author.username)
  message.channel.send(embed)
  .then(function (message) {
    message.react("✅")
    message.react("❌")
  }).catch(function () {

})
};


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sondage"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "sondage",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "sondage",
  };