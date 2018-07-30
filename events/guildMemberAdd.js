//Launched when a user joins the guild
exports.run = (client, member) => {
    const config = require("../config.json");

    member.guild.channels.get(`${config.defaultChannel}`).send(`Welcome ${member.displayName}`);
};
