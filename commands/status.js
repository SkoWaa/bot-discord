const os = require('os');
const pckg = require('../package.json');
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const msg = await message.channel.send(new Discord.MessageEmbed()
    .setDescription('Recherche du status de Hikari...')
    .setFooter('Hikari ©')    
    .setColor("#275BF0"));

const clientLatency = msg.createdTimestamp - message.createdTimestamp;
const totalMemory = os.totalmem();
const memoryPercentage = (totalMemory - os.freemem()) / totalMemory * 100;
let statusMsg = '';
let memoryMsg = '';

function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString();
    const min = Math.floor((ms / (1000 * 60)) % 60).toString();
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
    return `${hrs.padStart(2, '0')} heures, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} secondes `;
}

const status = new Discord.MessageEmbed()
    .setTitle('Hikari status')
    .setDescription(` Voci ci-dessous, quelques statistiques. \n\n> **${client.user.username}** est en ligne depuis ${duration(client.uptime)}\n\n> **Latence:** \`${clientLatency}ms\`\n>  **Version:** \`${pckg.version}\`\n>  **Utilisation de la mémoire:** \`${Math.round(memoryPercentage)}%\` `)
    .setThumbnail(client.user.displayAvatarURL());

// Memory Usage
if (memoryPercentage > 29 && memoryPercentage < 50) {
    memoryMsg = ' Utilisation de la mémoire supérieure à la moyenne. ';
}
else if (memoryPercentage > 0 && memoryPercentage < 30) {
    memoryMsg = 'Utilisation normale de la mémoire. ';
}
else if (memoryPercentage > 49 && memoryPercentage < 999999999) {
    memoryMsg = ' Utilisation de la mémoire extrêmement élevée. ';
}
else {
    memoryMsg = ' Utilisation normale de la mémoire. ';
}

// Bot latency
if (clientLatency > 199 && clientLatency < 600) {
    status.setColor("#275BF0");
    statusMsg = ' Latence de Hikari supérieure à la moyenne. ';
}
else if (clientLatency > 0 && clientLatency < 200) {
    status.setColor("#275BF0");
    statusMsg = ' Latence normale de Hikari. ';
}
else if (clientLatency > 599 && clientLatency < 999999999) {
    status.setColor("#275BF0");
    statusMsg = ' Latence de Hikari extrêmement élevée. ';
}
else {
    status.setColor("#275BF0");
    statusMsg = ' Latence de Hikari normal. ';
}

status.addField('Informations', `${statusMsg}\n${memoryMsg}`);
msg.edit(status);
},









exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["hikaristatus","status"],
    permlevel: "User",
};

exports.help = {
    name: "status",
    description: "obtenez la boutique fortnite",
    usage: "status",
};