module.exports = async (client, error) => {
  client.logger.log(
    `Un événement d'erreur a été envoyé par Discord.js: \n${JSON.stringify(error)}`,
    "erreur"
  );
};
