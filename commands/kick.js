const Discord = require("discord.js");

exports.run = async (client, message, args) => {
   
let kicked = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
    // MESSAGES
  
    if (!kicked) {
      let kickinfoembed = new Discord.MessageEmbed()
        .setTitle("Commande: kick")
        .setDescription(
          `**Description:** Kick un utilisateur. \n` +
            "**Utilisation:**\n" +
            "$kick [utilisateur] (raison) \n" +
            "**Examples:** \n" +
            "$kick <@557248789962817564> spam"
        )
        .setColor("#275BF0");
      message.channel.send(kickinfoembed);
  
      return;
    }
  
    if (message.author === kicked) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`Vous ne pouvez pas vous Expulsé !`)
        .setColor("#275BF0");
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Veuillez entrer une raison`)
        .setColor("#275BF0");
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("KICK_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "Vous n'avez pas la permission `KICK MEMBERS` pour exécuté cet commande "
        )
        .setColor("#275BF0");
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "Je n'es pas la permission `KICK MEMBERS` pour exécuté cet commande"
        )
        .setColor("#275BF0");
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.member(kicked).kick(reason);
  
    let successfullyembed = new Discord.MessageEmbed()
      .setDescription(`${kicked.tag} à bien été kick.`)
      .setColor("#275BF0");
  
    message.channel.send(successfullyembed);

    const embed1 = new Discord.MessageEmbed()
      .addField("Modérateur:", `**${message.author.username}**`)
      .addField("Membre kick:", `**${kicked.tag}**`)
      .addField("Raison:", `**${reason}**`)
      .setColor("#275BF0")
      .setFooter(message.author.username, message.author.avatarURL());
    client.channels.cache.get('762803594739056640').send(embed1);
  }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kick"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "kick",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "kick",
  };