//Check response time of bot
exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color: 3447003,
            fields: [{
                name: "Ping",
                value: `:ping_pong: Pong! ${client.ws.ping}ms`
            }],
            timestamp: new Date(),
        }
    });
};
