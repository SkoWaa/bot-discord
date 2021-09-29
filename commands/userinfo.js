const moment = require('moment');
const Discord = require('discord.js');

const flags = {
	DISCORD_EMPLOYEE: '<:e63co024yh741:764217889137885205>',
	DISCORD_PARTNER: '<:partner:764217746342412289>',
	BUGHUNTER_LEVEL_1: '<:BugHunter:764217747813957683>',
	BUGHUNTER_LEVEL_2: '<:BugHunter:764217747813957683>',
	HOUSE_BRAVERY: '<:BraveryLogo:764218282953670676>',
	HOUSE_BRILLIANCE: '<:BrillianceLogo:764218304764051486>',
	HOUSE_BALANCE: ' <:BrillianceLogo:764218304764051486>',
	EARLY_SUPPORTER: '<:supporter:585763690868113455> ',
    TEAM_USER: '<:e63co024yh741:764217889137885205>',
    DISCORD_NITRO: '<:Nitro_badge:764218654572544070>',
    DISCORD_NITRO_BOOSTER: '<:boost:764221809695522856>',
	SYSTEM: '<:e63co024yh741:764217889137885205>',
	VERIFIED_BOT: '<:6817_Discord_Verified:764217767254818830>',
    VERIFIED_DEVELOPER: '<:dev:764217742328856577>'
};


module.exports.run = async (client, message, target) => {
    const member = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === target.join(' ').toLowerCase()) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === target.join(' ').toLowerCase()) || message.guild.members.cache.get(target[0]) || message.guild.members.cache.find(member => target.length === 0 ? member === message.member : member.user.username.toLowerCase().includes(target.join(' ').toLowerCase())) || message.guild.members.cache.find(member => target.length === 0 ? member === message.member : member.displayName.toLowerCase().includes(target.join(' ').toLowerCase())) || message.guild.members.cache.get(target[0]) || message.member
    const roles = member.roles.cache.sort((a, b) => b.postion - a.postion).map(role => role.toString()).slice(0, -1);
    const userFlags = member.user.flags.toArray();
    const embed = new Discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
        .setColor('#275BF0')
        .setFooter('Hikari ©')
        .addField('Hikari a trouvé c\'est informtation', [
            `**● Pseudo :** ${member.user.username}`,
            `**● Tag :** ${member.user.discriminator}`,
            `**● Identifiant (ID) :** ${member.id}`,
            `**● Badge(s) :** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Aucun'}`,
            `**● Avatar** [Lien de l'avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
            `**● Activité :** ${member.user.presence.status}`,
            `**● Custom Status :** ${member.user.presence.activities || 'Aucun status custom'}`,
            `\u200b`
        ])
        .addField('Hikari trouve d\'autre informations', [
            `**● Rôle le plus élevé :** ${member.roles.highest.id === message.guild.id ? 'Aucun' : member.roles.highest.name}`,
            `**● Date d'arrivé :** ${moment(member.joinedAt).format('LLLL')}`,
            `**● Date de création :** ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
            `**● Rôles [${roles.length}]: ** ${roles.length < 32 ? roles.join(', ') : roles.length > 32 ? client.trimArray(roles) : 'Aucun'}`,
            `\u200b`
        ]);
    return message.channel.send(embed);
}


exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["ui","uinfo"],
    permlevel: "User",
};

exports.help = {
    name: "userinfo",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "userinfo",
};