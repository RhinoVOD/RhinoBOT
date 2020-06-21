//Display information about a user
exports.run = (client, message, args) => {
    let profileUser;
    let profileMember;

    if (args.length > 1)
        return message.channel.send("Invalid Input");
    else if (args.length === 1)
        profileUser = client.users.cache.find(element => element.username === args[0]);
    else
        profileUser = message.author;

    profileMember = message.guild.members.cache.find(element => element.id === profileUser.id);

    message.channel.send({
        embed: {
            color: 3447003,
            thumbnail: {
                url: `${profileUser.avatarURL()}`,
            },
            fields: [
            {
                name: `User Profile`,
                value: `Info related to ${profileUser}`
            },
            {
                name: "Username",
                value: `${profileUser.username}#${profileUser.discriminator}`
            },
            {
                name: "User ID",
                value: `${profileUser.id}`
            },
            {
                name: "Status",
                value: `${profileUser.presence.status}`
            },
            {
                name: "Account Created",
                value: `${profileUser.createdAt}`
            },
            {
                name: "Joined Server",
                value: `${profileMember.joinedAt}`
            }],
            timestamp: new Date(),
        }
    });
};
