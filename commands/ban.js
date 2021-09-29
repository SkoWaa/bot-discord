const Discord = require("discord.js")


exports.run = async (client, message, args) => {

  let banned = message.mentions.users.first() || client.users.resolve(args[0]);
  let reason = args.slice(1).join(" ");

  // MESSAGES

  if (!banned) {
    let baninfoembed = new Discord.MessageEmbed()
      .setTitle("Commande: ban")
      .setDescription(
        `**Description:** Bannir un membre, optionel temp limite. \n` +
          "**Commande secondaire:**\n" +
          "$ban save | Bannir un utilisateur et sauvegarder ces message dans le chat. \n" +
          "**Utilisation:**\n" +
          "$ban [utilisateur] (limite) (raison) \n" +
          "$ban save [utilisateur] (limite) (raison) \n" +
          "**Example:** \n" +
          "$ban <@557248789962817564> 48h spam \n" +
          "$ban save <@557248789962817564> 48h spam "
      )
      .setColor("#2C2F33");
    message.channel.send(baninfoembed);

    return;
  }

  if (message.author === banned) {
    let sanctionyourselfembed = new Discord.MessageEmbed()
      .setDescription(`Vous ne pouvez pas vous bannir !`)
      .setColor("#2C2F33");
    message.channel.send(sanctionyourselfembed);

    return;
  }

    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Veuillez entrer une raison`)
        .setColor("#2C2F33");
      message.channel.send(noreasonembed);

      return;
    }

  if (!message.member.permissions.has("BAN_MEMBERS")) {
    let nopermsembed = new Discord.MessageEmbed()
      .setDescription(
        "Vous n'avez pas la permission `BAN MEMBERS` pour exécuté cet commande"
      )
      .setColor("#275BF0");
    message.channel.send(nopermsembed);

    return;
  }

  if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
    let botnopermsembed = new Discord.MessageEmbed()
      .setDescription(
        "Je n'es pas la permission`BAN MEMBERS` pour exécuté cet commande"
      )
      .setColor("#275BF0");
    message.channel.send(botnopermsembed);

    return;
  }

  message.guild.members.ban(banned, { reason: reason });

  let successfullyembed = new Discord.MessageEmbed()
    .setTitle(`${banned.tag} à bien été bannie.`)
    .setColor("#275BF0");

  message.channel.send(successfullyembed);

  const embed1 = new Discord.MessageEmbed()
      .addField("Modérateur:", `${message.author.username}`)
      .addField("Membre Bannie:", `**${banned.tag}**`)
      .addField("Raison:", `**${reason}**`)
      .setColor("#275BF0")
      .setFooter(message.author.username, message.author.avatarURL());
    client.channels.cache.get('762803594739056640').send(embed1);
  }


    

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ban"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "ban",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "ban",
  };