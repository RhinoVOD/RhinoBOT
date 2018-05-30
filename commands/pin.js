//Pin the given message ID
//TODO: Allow pinning from any channel, not just the current one
exports.run = (client, message, args) => {
    let id = parseFloat(args[0]);

    //TODO: Properly check if arg is a number
    if (args[0].length !== 18)
        message.channel.send("Invalid MessageID");

    message.channel.fetchMessages({around: args[0], limit: 1})
        .then(messages => {
            const fetchedMsg = messages.first();

            if(fetchedMsg === undefined)
                message.channel.send("MessageID not found");
            else if(fetchedMsg !== undefined && fetchedMsg.pinned === true)
                message.channel.send("Message already pinned");
            else {
                let testPromise = fetchedMsg.pin().catch();
                    testPromise.then(value => console.log(`Pinned message: ${value}`));
            }
        });
};
