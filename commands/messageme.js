//Send a DM to the user
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('messageme')
        .setDescription('DMs you a given message')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The message to DM you')
                .setRequired(true)),
    async execute(interaction, client) {
        const text = interaction.options.getString('input');

        await interaction.user.createDM();
        await interaction.user.dmChannel.send(text);
        await interaction.reply('Message sent!');
    },
};
