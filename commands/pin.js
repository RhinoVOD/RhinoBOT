//Pin the given message ID
//TODO: Allow pinning from any channel, not just the current one
exports.run = (client, message, args) => {
    if (!message.guild.available){
        return message.channel.send("Guild currently unavailable");
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send("You don't have permission");

    //Return if arg isn't proper size or isn't only numbers
    if (args[0].length !== 18 || args[0].match(/^[0-9]+$/) == null)
        return message.channel.send("Invalid MessageID");

    message.channel.messages.fetch({around: args[0], limit: 1})
        .then(messages => {
            const fetchedMsg = messages.first();

            if(fetchedMsg === undefined)
                message.channel.send("MessageID not found");
            else if(fetchedMsg.pinned === true)
                message.channel.send("Message already pinned");
            else {
                fetchedMsg.pin()
                    .catch((err) => {
                        message.channel.send("Message failed to pin");
                        console.error(err);
                    });
            }
        });
};
