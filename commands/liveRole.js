//Change the role given when someone starts streaming
exports.run = (client, message, args) => {
    const config = require("../config.json");
    newRole = message.guild.roles.find("name", args[0]);

    if (newRole === null) {
        message.channel.send(`${args[0]} is not a role`);
    } else {
        message.channel.send(`New Live role ${newRole} accepted. Please delete the old role.`);
        config.liveRole = newRole;
    }
};
