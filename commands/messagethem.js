//Send a DM to the specified user
exports.run = (client, message, args) => {
    if (args.length !== 1)
        return message.channel.send("Invalid Input");

    let user = client.users.find('username', args[0]);

    if (user === null)
        return message.channel.send("User not found");

    user.send({
        embed: {
            color: 3447003,
            fields: [{
                name: "Test Direct Message",
                value: `:wave: Hello! This is a test of direct messaging.`
            }],
            timestamp: new Date(),
        }
    });
};
