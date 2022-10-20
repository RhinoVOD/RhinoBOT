//Reload a command's file, removes need to restart bot
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reload')
        .setDescription('Reload the file for a given command')
        .addBooleanOption(isCommand =>
            isCommand.setName('type')
                .setDescription('True for command, false for event')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The name of the command')
                .setRequired(true)),
    async execute(interaction, client) {
        const isCommand = interaction.options.getBoolean('isCommand');
        let commandName = interaction.options.getString('input');

        if (isCommand) {
            commandName = './' + commandName;
        }
        else {
            commandName = '../events/' + commandName;
        }

        try {
            delete require.cache[require.resolve(`${commandName}.js`)];
            interaction.reply(`The command ${commandName} has been reloaded`);
        }
        catch (err) {
            interaction.reply("Reload failed or command/event doesn't exist");
        }
    },
};




exports.run = (client, message, args) => {
    if(!args || args.size < 1)
        return message.reply("Must provide a command name to reload");

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        message.channel.send(`The command ${args[0]} has been reloaded`);
    }
    catch (err) {
        message.channel.send("Command failed to reload or doesn't exist");
    }

    try {
        delete require.cache[require.resolve(`../events/${args[0]}.js`)];
        message.channel.send(`The event ${args[0]} has been reloaded`);
    }
    catch (err) {
        message.channel.send("Event failed to reload or doesn't exist");
    }
};
