//Display information about a user
exports.run = (client, message, args) => {
    let user;

    if (args.length > 1)
        return message.channel.send("Invalid Input");
    else if (args.length === 1)
        user = client.users.cache.find(element => element.username === args[0]);
    else
        user = message.author;

    message.channel.send({
        embed: {
            color: 3447003,
            image: {
                url: `${user.avatarURL()}`,
            },
            fields: [{
                name: `Profile Name`,
                value: `${user}`
            }],
            timestamp: new Date(),
        }
    });
};
