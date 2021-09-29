const Discord = require("discord.js")


exports.run = async (client, message, args) => {

    message.delete({ timeout: 0 })
    let msg = await
    message.channel.send("Recherche du Ping ...")

    var time = msg.createdTimestamp - message.createdTimestamp + " ms "
   
    if (time.startsWith('-')) var time = message.createdTimestamp - msg.createdTimestamp + ' ms '
    
    const embedCreated = new Discord.MessageEmbed()


    .setColor('#275BF0')
    .setDescription("Voici le ping de Hikari")
    .setFooter("Hikari  ©")
    .addField(`Bot`, `> ton emojis ` + time)
    .addField("Api", `> ton emojis ` + client.ws.ping + " ms")
    
    await msg.edit(embedCreated)
    msg.edit("")


};
    

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ping"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "ping",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "ping",
  };