const { Shard } = require('discord.js');
const Discord = require('discord.js');
const moment = require("moment");

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydeny: 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

exports.run = async (client, message, args) => {
    let shard = client.ws.shards.size;

const roles = message.guild.roles.cache
  .sort((a, b) => b.position - a.position)
  .map(role => role.toString())
  .slice(0, -1);

const members = message.guild.members.cache;
const channels = message.guild.channels.cache;
const emojis = message.guild.emojis.cache;

const server = new Discord.MessageEmbed() 

        .setTitle(`**Informations sur le serveur de : __${message.guild.name}__**`)
        .setColor('#275BF0')

        .setThumbnail(message.guild.iconURL({ dynamic: true, size: 512 }))

        .addField('❮ General ❯', [
                `**● Owner:** ${message.guild.owner.user.tag}`,
				`**● Nom:** ${message.guild.name}`,
				`**● ID:** ${message.guild.id}`,
				`**● Region:** ${regions[message.guild.region]}`,
                `**● Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : '0'}`,
				`**● Filtre explicite:** ${filterLevels[message.guild.explicitContentFilter]}`,
				`**● Level de vérifications:** ${verificationLevels[message.guild.verificationLevel]}`,
				`**● Date de création:** ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).fromNow()}`,
				`\u200b`
			])
        	.addField('❮ Statistics ❯', [
                `**● Membre total:** ${message.guild.memberCount}`,
                `**● Bots:** ${members.filter(member => member.user.bot).size}`,
                `**● Salons:** ${channels.filter(channel => channel.type === 'text').size}`,
				`**● Salons vocals:** ${channels.filter(channel => channel.type === 'voice').size}`, 
                `**● Nombre de boost:** ${message.guild.premiumSubscriptionCount || '0'}`, 
				`**● Nombre de rôles:** ${roles.length}`,
				`**● Nombre d'émoji:** ${emojis.size}`,
				`**● Nombre d'émoji régulier:** ${emojis.filter(emoji => !emoji.animated).size}`,
				`**● Nombre d'émoji animé:** ${emojis.filter(emoji => emoji.animated).size}`,
                
				`\u200b`
			])
        .setTimestamp()
        .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
        
message.channel.send(server).catch(console.error);;
}

exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["si","serverinfo"],
    permlevel: "User",
};

exports.help = {
    name: "serverinfo",
    description: "obtenez la boutique fortnite",
    usage: "servinfo",
};