const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

exports.run = async (client, message, args) => {

    const name = args.join(" ");

    if (!name) {
        return message.reply("Maybe it's useful to actually search for someone...!")
            .then(m => m.delete(5000));
    }

    const url = `https://instagram.com/${name}/?__a=1`;
    
    let res; 

    try {
        res = await fetch(url).then(url => url.json());
    } catch (e) {
        return message.reply("I couldn't find that account... :(")
            .then(m => m.delete(5000));
    }

    const account = res.graphql.user;

    const embed = new MessageEmbed()
        .setColor("#275BF0")
        .setTitle(account.full_name)
        .setURL(`https://instagram.com/${name}`)
        .setThumbnail(account.profile_pic_url_hd)
        .addField("Informations du profile", stripIndents`**- Nom:** ${account.username}
        **- Nom complet:** ${account.full_name}
        **- Biographie:** ${account.biography.length == 0 ? "non" : account.biography}
        **- Postes:** ${account.edge_owner_to_timeline_media.count}
        **- Abonnées:** ${account.edge_followed_by.count}
        **- Piques d'abonnées:** ${account.edge_follow.count}
        **- Compte privée :** ${account.is_private ? "Oui 🔐" : "Non 🔓"}`);

    message.channel.send(embed);
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["insta"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "insta",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "insta",
  };