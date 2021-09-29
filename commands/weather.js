const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = async (client, message, args) => {
    
if(!args.length) {
    let specify = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('<:tuveuxquoi:764228417092321340> | S\'il vous plait veuillez fournir une localisation !')
    return message.channel.send(specify)
  }

weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
try {

let temp = result[0].current.temperature;

let embed = new Discord.MessageEmbed()
.setTitle(`Météo - ${result[0].location.name}`)
.addField("Temperature", `${result[0].current.temperature} Fahrenheit`, true)
.addField("Ciel", result[0].current.skytext, true)
.addField("Humidité", result[0].current.humidity, true)
.addField("Vitesse du vent", result[0].current.windspeed, true)
.addField("Temps d'observations", result[0].current.observationtime, true)
.addField("Affichage du vent", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);

if(temp >= 80) {
embed.setColor("#275BF0")
} else if(temp >= 60 && temp <= 79) {
embed.setColor("#275BF0")
} else {
embed.setColor("#275BF0")
}
message.channel.send(embed)

} catch(err) {
let error = new MessageEmbed()
return message.channel.send(error.setColor('RED').setTitle('<:tuveuxquoi:764228417092321340> | Impossible de récupérer les informations météo de cet endroit.'))
}
});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["weather", "wh"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "weather",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "weather",
  };