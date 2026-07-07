//Launched when bot starts/restarts
const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}. `+
            `Ready to help in ${client.channels.cache.size} `+
            `channels on ${client.guilds.cache.size} servers, `+
            `for a total of ${client.users.cache.size} users.`);
    },
};
