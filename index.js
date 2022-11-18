require("dotenv").config({ path: `${__dirname}/.env` });
const { Client } = require("discord.js");
const client = new Client({ intents: 0 });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

client.on("ready", async () => {
    await sleep(700);
    console.log(`${client.user.tag}->${client.user.id}`);
    console.log(`Invite URL: ${client.user.id}`);
    client.application.commands.set([{ name: "refresh", description: "You need to use this command at least once a month to keep the badge" }]);
});

client.on(
    "interactionCreate",
    async (interaction) => await interaction.reply({ content: "\u200b", ephemeral: true }).then(async () => await interaction.deleteReply())
);

client.login(process.env.token);
