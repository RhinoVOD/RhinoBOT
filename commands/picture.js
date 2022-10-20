//Display the user's profile picture
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('picture')
        .setDescription('Replies with your profile picture and some info'),
    async execute(interaction, client)  {
        let user = interaction.user;

        const exampleEmbed = {
            color: 3447003,
            fields: [
                {
                    name: `Profile Name`,
                    value: `${user}`
                },
            ],
            image: {
                url: `${user.displayAvatarURL()}`,
            },
            timestamp: new Date().toISOString(),
        };

        await interaction.reply({ embeds: [exampleEmbed] });
    },
};
