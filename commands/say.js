//Repeat a given message
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Repeats back a given phrase')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)),
    async execute(interaction, client) {
        const text = interaction.options.getString('input');
        await interaction.reply(text);
    },
};
