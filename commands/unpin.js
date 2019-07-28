//Unpin the given message ID
//TODO: Allow unpinning from any channel, not just the current one
exports.run = (client, message, args) => {
    //Return if arg isn't proper size or isn't only numbers
    if (args[0].length !== 18 || args[0].match(/^[0-9]+$/) == null)
        return message.channel.send("Invalid MessageID");

    message.channel.fetchMessages({around: args[0], limit: 1})
        .then(messages => {
            const fetchedMsg = messages.first();

            if(fetchedMsg === undefined)
                message.channel.send("MessageID not found");
            else if(fetchedMsg.pinned === false)
                message.channel.send("Message is not already pinned");
            else {
                fetchedMsg.unpin()
                    .catch((err) => {
                        message.channel.send("Message failed to unpin");
                        console.error(err);
                    });
            }
        });
};
