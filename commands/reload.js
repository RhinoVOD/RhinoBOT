//Reload the file for the specified command
exports.run = (client, message, args) => {
    if(!args || args.size < 1)
        return message.reply("Must provide a command name to reload.");

    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.channel.send(`The command ${args[0]} has been reloaded`);
};
