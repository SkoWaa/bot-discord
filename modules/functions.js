const Discord = require("discord.js");

module.exports = (client) => {
  const defaultSettings = {
    prefix: "$",
    modLogChannel: "modérateur-logs",
    modRole: "Modérateur",
    adminRole: "Administrateur",
    systemNotice: "true",
    lvlsEnabled: "false",
  };

  client.checkDays = (date) => {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
  };

  client.embedCreator = (channel, message, thumbnailImage) => {
    try {
      if (!thumbnailImage.length) thumbnailImage = client.user.avatarURL();
    } catch (e) {
      thumbnailImage = client.user.avatarURL();
    }

    const embedCreated = new Discord.MessageEmbed()
      .setColor("#275BF0")
      .setAuthor(
        "Hikari",
        client.user.avatarURL(),
        "https://discordbotlist.com/bots/hikari"
      )
      .setDescription(message)
      .addField(' Liens','**[Invite](https://discord.com/api/oauth2/authorize?client_id=718502508363907142&permissions=8&scope=bot) | [Support](https://discord.gg/4gs38MS)**')
      .setThumbnail(thumbnailImage)
      .setTimestamp()
      .setFooter("Hikari ©", client.user.avatarURL());

    channel.send(embedCreated);
  };

  client.randomInt = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  client.permlevel = (message) => {
    let permlvl = 0;

    const permOrder = client.config.permLevels
      .slice(0)
      .sort((p, c) => (p.level < c.level ? 1 : -1));

    while (permOrder.length) {
      const currentLevel = permOrder.shift();
      if (message.guild && currentLevel.guildOnly) continue;
      if (currentLevel.check(message)) {
        permlvl = currentLevel.level;
        break;
      }
    }
    return permlvl;
  };

  client.getSettings = (guild) => {
    client.settings.ensure("default", defaultSettings);
    if (!guild) return client.settings.get("default");
    const guildConf = client.settings.get(guild.id) || {};
    return { ...client.settings.get("default"), ...guildConf };
  };

  client.awaitReply = async (msg, question, limit = 60000) => {
    const filter = (m) => m.author.id === msg.author.id;
    await msg.channel.send(question);
    try {
      const collected = await msg.channel.awaitMessages(filter, {
        max: 1,
        time: limit,
        errors: ["time"],
      });
      return collected.first().content;
    } catch (e) {
      return false;
    }
  };

  client.clean = async (client, text) => {
    if (text && text.constructor.name == "Promise") text = await text;
    if (typeof text !== "string")
      text = require("util").inspect(text, { depth: 1 });

    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203))
      .replace(
        client.token,
        "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0"
      );

    return text;
  };

  client.loadCommand = (commandName) => {
    try {
      client.logger.log(`Loading Command: ${commandName}`);
      const props = require(`../commands/${commandName}`);
      if (props.init) {
        props.init(client);
      }
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, props.help.name);
      });
      return false;
    } catch (e) {
      return `Unable to load command ${commandName}: ${e}`;
    }
  };

  client.unloadCommand = async (commandName) => {
    let command;
    if (client.commands.has(commandName)) {
      command = client.commands.get(commandName);
    } else if (client.aliases.has(commandName)) {
      command = client.commands.get(client.aliases.get(commandName));
    }
    if (!command)
      return `La commande \`${commandName}\` ne semble pas exister, ni n'est-ce un alias. Réessayez !`;

    if (command.shutdown) {
      await command.shutdown(client);
    }
    const mod =
      require.cache[require.resolve(`../commands/${command.help.name}`)];
    delete require.cache[
      require.resolve(`../commands/${command.help.name}.js`)
    ];
    for (let i = 0; i < mod.parent.children.length; i++) {
      if (mod.parent.children[i] === mod) {
        mod.parent.children.splice(i, 1);
        break;
      }
    }
    return false;
  };

  Object.defineProperty(String.prototype, "toProperCase", {
    value: function () {
      return this.replace(
        /([^\W_]+[^\s-]*) */g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
    },
  });

  Object.defineProperty(Array.prototype, "random", {
    value: function () {
      return this[Math.floor(Math.random() * this.length)];
    },
  });

  client.wait = require("util").promisify(setTimeout);

  process.on("uncaughtException", (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    client.logger.error(`Uncaught Exception: ${errorMsg}`);
    console.error(err);
    process.exit(1);
  });

  process.on("unhandledRejection", (err) => {
    client.logger.error(`Unhandled rejection: ${err}`);
    console.error(err);
  });
};
