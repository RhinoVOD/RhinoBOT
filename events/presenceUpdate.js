//Launched when a user's presence is changed
exports.run = (client, oldMember, newMember) => {
    const config = require("../config.json");

    if (newMember.presence.game !== null && newMember.presence.game.streaming === true) {
        const role = newMember.guild.roles.find("name", config.liveRole);

        newMember.addRole(role)
            .catch(console.error);
    }
    else if (newMember.roles.has(config.liveRole))
        newMember.removeRole(config.liveRole)
            .catch(console.error);
};
