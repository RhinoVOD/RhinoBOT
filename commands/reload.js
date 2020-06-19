//Reload a command's file, removes need to restart bot
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
