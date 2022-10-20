//Pin the given message ID
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pin')
        .setDescription('Pins the given message')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The ID of the message to pin')
                .setRequired(true)),
    async execute(interaction, client) {
        const messageID = interaction.options.getString('input');

        interaction.channel.messages.fetch(`${messageID}`)
            .then(message => {
                if (message.pinned === true)
                    interaction.reply("Message already pinned");
                else {
                    message.pin()
                        .catch((err) => {
                            interaction.reply("Message failed to pin");
                            console.error(err);
                        });
                    interaction.reply('Message pinned');
                }
            })
            .catch(() => interaction.reply("Command failed"));
    },
};
