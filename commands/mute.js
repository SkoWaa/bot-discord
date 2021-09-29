const Discord = require("discord.js");
const ms = require("ms");


exports.run = async (client, message, args) => {

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
    let reason = args.slice(1).join(" ");
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Je ne peux pas mute !")
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    if(!muteRole) return message.reply("Je ne trouve pas d'utilisateur");
  let muteTime = (args[1] || '60');

  if (!reason) {
    let noreasonembed = new Discord.MessageEmbed()
      .setDescription(`Veuillez entrer une raison`)
      .setColor("#2C2F33");
    message.channel.send(noreasonembed);

    return;
  }


    if (!muteRole) {
        muteRole = await message.guild.roles.create({
            data: {
                name: 'muted',
                color: 'BLUE',
                permissions: []
            }
        });


    message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.updateOverwrite(muteRole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            CONNECT: false
        });

    });
}


await user.roles.add(muteRole.id);
setTimeout(() => {
const embed1 = new Discord.MessageEmbed()
      .addField("Modérateur:", `${message.author.username}`)
      .addField("Membre mute:", `**<@${user.id}>**`)
      .addField("Temps du mute", `${ms(ms(muteTime))}.`)
      .addField("Raison:", `**${reason}**`)
      .setColor("#275BF0")
      .setFooter(message.author.username, message.author.avatarURL());
    client.channels.cache.get('762803594739056640').send(embed1);
}, ms(muteTime));




//end of module
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["mute"],
    permLevel: "User",
};

exports.help = {
    name: "mute",
    category: "Bot",
    description: "Affiche toutes les commandes disponibles",
    usage: "mute",
};
