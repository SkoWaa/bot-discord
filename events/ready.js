module.exports = async (client) => {
  client.logger.log(
    `
  -------------------
  Draper
  Advance Discord bot created by skowa
  -------------------`,
    "ready"
  );
  try {
    await client.user.setActivity(
      `$invite`,
      {
        type: "WATCHING",
      }
    );
    await client.user.setStatus("dnd");
  } catch (e) {}
};
