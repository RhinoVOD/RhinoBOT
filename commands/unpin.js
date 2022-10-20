//Unpin the given message ID
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unpin')
        .setDescription('Unpins the given message')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The ID of the message to unpin')
                .setRequired(true)),
    async execute(interaction, client) {
        const messageID = interaction.options.getString('input');

        interaction.channel.messages.fetch(`${messageID}`)
            .then(message => {
                if (message.pinned === false)
                    interaction.reply("Message is not pinned");
                else {
                    message.unpin()
                        .catch((err) => {
                            interaction.reply("Message failed to pin");
                            console.error(err);
                        });
                    interaction.reply('Message unpinned');
                }
            })
            .catch(() => interaction.reply("Command failed"));
    },
};
