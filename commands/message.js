//Display a message with a random number
exports.run = (client, message, args) => {
    message.author.send({embed: {
            color: 3447003,
            fields: [{
                name: "Test Direct Message",
                value: `:wave: Hello! This is a test of direct messaging.`
            }],
            timestamp: new Date(),
        }});
};
