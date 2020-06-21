//Change the role given when someone starts streaming
exports.run = (client, message, args) => {
    const fs     = require("fs");
    const config = require("../config.json");

    newRole = message.guild.roles.cache.find(element => element.name === args[0]);

    if (newRole === null) {
        message.channel.send(`${args[0]} is not a role`);
    }
    else {
        config.liveRole = String(newRole.id);
        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
        message.channel.send(`New role ${newRole} accepted.`);
    }
};
