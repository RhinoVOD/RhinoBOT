//Kick a user from the guild
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks the given user')
        .addUserOption(user =>
            user.setName('user')
                .setDescription('The ID of the user to kick')
                .setRequired(true)),
    async execute(interaction, client) {
        const user = interaction.options.getUser('user');

        await user.kick()
            .catch(() => interaction.reply("Command failed"));
    },
};
