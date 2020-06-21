//Launched when a user joins the guild
exports.run = (client, member) => {
    const config = require("../config.json");

    let date = new Date();
    let currentTimestamp = date.getTime();
    let profileUser = member.user;

    member.guild.channels.cache.get(`${config.defaultChannel}`).send(`Welcome ${member.displayName}`);
    member.guild.channels.cache.get(`${config.defaultChannel}`).send(currentTimestamp - profileUser.joinedTimestamp / 1000 + 'minutes');

    if(currentTimestamp - profileUser.createdTimestamp > 60000){
      member.guild.channels.cache.get(`${config.defaultChannel}`).send(`This account was made more than 10 minutes ago`);
      member.guild.channels.cache.get(`${config.defaultChannel}`).send(currentTimestamp - profileUser.createdTimestamp);
    }
};
