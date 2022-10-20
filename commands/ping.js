//Check response time of bot
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check the bot response time'),
    async execute(interaction, client) {
        await interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
};
