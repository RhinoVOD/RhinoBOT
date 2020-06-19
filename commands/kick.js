//Kick a user from the guild
exports.run = (client, message, args) => {
    const config  = require("../config.json");
    const modRole = message.guild.roles.cache.find(element => element.name === config.adminRole);



    if (modRole === null)
        return message.reply(`${config.adminRole} role does not exist`);

    //User doesn't have necessary Role
    if (!message.member.roles.cache.has(modRole.id))
        return message.reply(" you don't have the admin role");

    //Message has no mentioned user
    if (message.mentions.members.size === 0)
        return message.reply(" include a user to kick");

    //Bot doesn't have Kick permission
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
        return message.reply(" I lack the necessary permission");

    const kickMember = message.mentions.members.first();

    kickMember.kick().then(member => {
        message.channel.send(`${member.user.username} was successfully kicked.`);
    });
};
