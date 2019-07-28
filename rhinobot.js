const Discord   = require("discord.js");
const client    = new Discord.Client();
const fs        = require("fs");
const config    = require("./config.json");

//Associate events files with related event
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

//Set the bot's activity status
client.on("ready", () => {
    client.user.setActivity('with my code', { type: 'PLAYING' })
        .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
        .catch(console.error);
});

//Occurs when any message is seen
client.on("message", (message) => {
    //Ignore bot or non-prefix messages
    if (message.author.bot || message.content.indexOf(config.prefix) !== 0) return;

    const args      = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command   = args.shift().toLowerCase();

    //Find related file for given command
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
    }
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

client.login(config.token)
    .catch((err) => {
        console.error(err);
    });
