require("dotenv").config({ path: `${__dirname}/.env` });
const { Client } = require("discord.js");
const client = new Client({ intents: 0 });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
console.log(`Booting up`);
client.on("ready", async () => {
    await sleep(500);
    console.log(`${client.user.tag}->${client.user.id}`);
    console.log(`Invite URL: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8`);
    await client.application.commands.set([{ name: "refresh", description: "You need to use this command at least once a month to keep the badge" }]);
});

client.on(
    "interactionCreate",
    async (interaction) =>
        await interaction.reply({
            content: "Your DiscordActive Developer got refreshed - remember it takes up to 24h to have it appear, as Discord does verification once a day",
            ephemeral: true,
        })
);

client.login(process.env.token);
