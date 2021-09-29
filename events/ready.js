module.exports = async (client) => {
  client.logger.log(
    `
  -------------------
  Draper
  Advance Discord bot created by Dairkoos
  "𝐒𝐤𝐨𝐖𝐚.#4824
  -------------------`,
    "ready"
  );
  try {
    await client.user.setActivity(
      `$invinte`,
      {
        type: "WATCHING",
      }
    );
    await client.user.setStatus("dnd");
  } catch (e) {}
};
