const Discord= require('discord.js')
module.exports = (client, guild) => {

    //console.log(channel)
    let removeembed = new Discord.MessageEmbed()
        .setTitle(`BOT vient d\'être retiré du serveur serveur ${guild.name}`)
        .setThumbnail(guild.iconURL())
        .addField(`👑 Propriétaire:`, `${guild.owner}`)
        .addField(`📇 Nom du serveur :`, `${guild.name}`)
        .addField(` Id du serveur:`, `${guild.id}`)
        .addField(` Nombre de membres:`, `${guild.memberCount}`)
        .setColor(`#275BF0`)
        .setFooter( `Désormais : ${client.guilds.cache.size} serveurs`, client.user.displayAvatarURL())
        client.guilds.cache.get("625885104639574027").channels.cache.get("764205601005502474").send(embed)
    channel.send(removeembed)    
    
    //console.log(channel)
};