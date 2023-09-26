//Display information about a user
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Replies with your profile information'),
    async execute(interaction, client)  {
        let user = interaction.user;

        const profileEmbed = {
            color: 3447003,
            thumbnail: {
                url: `${user.avatarURL()}`,
            },
            fields: [
                {
                    name: "Username",
                    value: user.discriminator === '0' ? `${user.username}` : `${user.username}#${user.discriminator}`
                },
                {
                    name: "User ID",
                    value: `${user.id}`
                },
                {
                    name: "Status",
                    value: `${client.user.presence.status}`
                },
                {
                    name: "Account Created",
                    value: `${user.createdAt}`
                },
                {
                    name: "Joined Server",
                    value: `${interaction.member.joinedAt}`
                }
            ],
            timestamp: new Date().toISOString(),
        };

        client.presence

        await interaction.reply({ embeds: [profileEmbed] });
    },
};
