const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  let unbanned = message.mentions.users.first() || client.users.resolve(args[0]);
  let reason = args.slice(1).join(" ");

  let member = await client.users.fetch(unbanned);
  let ban = await message.guild.fetchBans();

  // MESSAGES

  if (!unbanned) {
    let unbaninfoembed = new Discord.MessageEmbed()
      .setTitle("Commande: unban")
      .setDescription(
        `**Description:** Unban un membre. \n` +
          "**Utilisation:**\n" +
          "$unban [utilisateur] (limite) (raison) \n" +
          "**Examples:** \n" +
          "$unban <@597253939469221891> bonne personne \n" +
          "$unban 597253939469221891 bonne personne "
      )
      .setColor("#2C2F33");
    message.channel.send(unbaninfoembed);

    return;
  }

  if (!ban.get(member.id)) {
    let notbannedembed = new Discord.MessageEmbed()
      .setDescription("Cet utilisateur n'est pas bannie")
      .setColor("#2C2F33");
    message.channel.send(notbannedembed);

    return;
  }

  if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
    let botnoperms = new Discord.MessageEmbed()
      .setDescription(
        "Je n'es pas la permissions"
      )
      .setColor("#2C2F33");
    message.channel.send(botnoperms);

    return;
  }

  if (!message.member.permissions.has("BAN_MEMBERS")) {
    let nopermsembed = new Discord.MessageEmbed()
      .setDescription(
        "Vous n'avez pas la permission `BAN MEMBERS` pour exécuté cet commande"
      )
      .setColor("#2C2F33");
    message.channel.send(nopermsembed);

    return;
  }

  var user = ban.get(member.id);
  message.guild.members.unban(member);
  let successfullyembed = new Discord.MessageEmbed()
    .setTitle(`${member.tag} à bien été débannie.`)
    .setColor("#2C2F33");

  message.channel.send(successfullyembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["unban", "ub"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "unban",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "unban",
  };