//Check response time of bot
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('website')
        .setDescription('A link to my website'),
    async execute(interaction, client)  {
        const websiteEmbed = {
            color: 3447003,
            title: `:earth_americas: My Website`,
            url: `https://ryan-marsh.weebly.com/`,
        };

        await interaction.reply({ embeds: [websiteEmbed] });
    },
};
