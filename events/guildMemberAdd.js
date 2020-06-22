//Launched when a user joins the guild
exports.run = (client, member) => {
    const config = require("../config.json");

    let date = new Date();
    let currentTimestamp = date.getTime();
    let profileUser = member.user;

    if(currentTimestamp - profileUser.createdTimestamp < 8.64 * Math.pow(10, 7)){
      member.guild.channels.cache.get(`${config.defaultChannel}`).send(`New account warning: ${member}`);
    }
};
