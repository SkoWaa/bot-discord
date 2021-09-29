const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");

exports.run = async (client, msg, args) => {

    try {
        if(!msg.member.hasPermission(['MANAGE_CHANNELS', 'CREATE_INSTANT_INVITE'])) {
            return msg.channel.send({embed: {
                color: 'RED',
                description: 'Oopss, désolé mais vous avez besoin de la permissions \`MANAGE_CHANNELS\` et \`CREATE_INSTANT_INVITE\`'
            }})
        }
        if(!msg.guild.me.hasPermission('CREATE_INSTANT_INVITE')) {
            return msg.channel.send({embed: {
                color: 'RED',
                description: 'Désolé je n\'es pas la permission /`CREATE_INSTANT_INVITE/`'
            }})
        }
        let ch = await msg.channel;
        let invite = await msg.channel.createInvite()
        let embd = new MessageEmbed()
        .setTitle('✅ | Trouvé !')
        .setThumbnail(msg.guild.iconURL({dynamic: true, size: 2048}))
        .setColor('#275BF0')
        .setDescription(`
        **Salons: \`${ch.name}\`**
        **Requête de: \`${msg.author.username}\`**
        **Lien: \`${invite}\`**`)
        msg.channel.send(embd)
        msg.channel.send(`URL: ${invite}`)

    } catch (er) {
        msg.channel.send(`oops petite erreur ${er}`)
        console.log(er)

    }

}


    

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["inviteserv"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "inviteserv",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "inviteserv",
  };