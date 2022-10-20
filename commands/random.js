//Display a message with a random number
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('Get a random number between 0-100'),
    async execute(interaction, client) {
        let rng = Math.floor(Math.random() * 101); //Int from 0-100
        await interaction.reply(`Random chance: ${rng}%`);
    },
};
