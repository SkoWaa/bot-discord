const math = require('mathjs');
const { MessageEmbed } = require('discord.js');


exports.run = (client, message, args) => {

	const no = new MessageEmbed()
    if (!args[0]) {
		return message.channel.send(no.setDescription('<:tuveuxquoi:764228417092321340> | Veuillez spécifié un calcul ').setColor('BLUE'))
		}
		let resp;
		try {
			resp = math.evaluate(args.join(' '));
		}
		
		catch (e) {
			const no = new MessageEmbed()
			return message.channel.send(no.setDescription('<:tuveuxquoi:764228417092321340> | Veuillez spécifié un calcul valable ').setColor('BLUE'))
			
			
			};

		const embed = new MessageEmbed()
			.setColor('BLUE')
			.setTitle('Mathématiques')
			.addField('Votre calcul:', `\`\`\`js\n${args.join(' ')}\`\`\``)
			.addField('Réponse:', `\`\`\`js\n${resp}\`\`\``)
			.setFooter(`Requête de ${message.author.tag}`)
			.setTimestamp();

		message.channel.send(embed);
	};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["calcul"],
    permLevel: "User",
};

exports.help = {
    name: "calcul",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "calcul",
};