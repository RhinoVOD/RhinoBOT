//Create an emoji poll
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Create a Yes/No or numbered poll ')
        .addIntegerOption(option =>
            option.setName('input')
                .setDescription('For numbered polls')
                .setRequired(false)
                .setMinValue(2)
                .setMaxValue(10)),
    async execute(interaction, client) {
        const number = interaction.options.getInteger('input') ?? 0;
        const message = await interaction.reply({ content: 'Poll', fetchReply: true });

        if (number !== 0) {
            await numberPoll(message, number);
        }
        else {
            message.react('👍')
                .then(() => message.react('👎'))
                .then(() => message.react('🤷'))
                .catch(() => console.error('One of the emojis failed to react.'));
        }
    },
};

async function numberPoll(message, value){
    let numberEmojis = [`1⃣`, `2⃣`, `3⃣`, `4⃣`, `5⃣`, `6⃣`, `7⃣`, `8⃣`, `9⃣`, `🔟`];

    for(let i = 0; i < value; ++i){
        await message.react(numberEmojis[i]);
    }
}
