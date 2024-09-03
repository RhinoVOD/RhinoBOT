//Reload a command's file, removes need to restart bot
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reload')
        .setDescription('Reload the file for a given command')
        .addStringOption(option =>
            option.setName('command')
                .setDescription('The name of the command')
                .setRequired(true)),
    async execute(interaction, client) {
        let commandName = interaction.options.getString('input');

        const command = interaction.client.commands.get(commandName);
        if (!command) {
            return interaction.reply(`Command \`${commandName}\` not found`);
        }

        try {
            await interaction.client.commands.delete(command.data.name);
            const newCommand = require(`./${command.data.name}.js`);
            await interaction.client.commands.set(newCommand.data.name, newCommand);
            await interaction.reply(`Command \`${newCommand.data.name}\` was successfully reloaded`);
        }
        catch (err) {
            console.error(err);
            await interaction.reply(`There was an error while reloading \`${command.data.name}\`:\n\`${err.message}\``);
        }
    },
};
