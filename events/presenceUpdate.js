//Launched when a user's presence is changed
exports.run = (client, oldPresence, newPresence) => {
    const config = require("../config.json");

    let foundLive = 0;
    foundLive = newPresence.activities.forEach(findLive);

    function findLive(item, index){
      if(item.type === "STREAMING"){
        return 1;
      }
    }

    if (foundLive) {
        const role = newMember.guild.roles.cache.find("name", config.liveRole);

        newMember.addRole(role)
            .catch(console.error);
    }
    else if (newPresence.member.roles.cache.has(config.liveRole))
        newMember.removeRole(config.liveRole)
            .catch(console.error);
};
