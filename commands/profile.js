//Display information about a user
exports.run = (client, message, args) => {
    message.channel.send({embed: {
            color: 3447003,
            thumbnail: {
                url: `${message.author.displayAvatarURL}`
            },
            fields: [
                {
                name: `User Profile`,
                value: `Info related to ${message.author}`
                },
                {
                    name: "Username",
                    value: `${message.author.username}#${message.author.discriminator}`
                },
                {
                    name: "User ID",
                    value: `${message.author.id}`
                },
                {
                    name: "Status",
                    value: `${message.author.presence.status}`
                },
                {
                    name: "Highest Rank",
                    value: `${message.member.highestRole}`
                },
                {
                    name: "Account Created",
                    value: `${message.author.createdAt}`
                },
                {
                    name: "Joined Server",
                    value: `${message.member.joinedAt}`
                }
            ],
            timestamp: new Date(),
        }});
};
