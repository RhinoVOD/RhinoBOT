//Change the bot's prefix to the given one
exports.run = (client, message, args) => {
    const fs      = require("fs");
    const config  = require("../config.json");

    if (args.length === 0 || args[0].length !== 1)
        message.channel.send("Prefix must be one character");
    else {
        config.prefix = args[0];
        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
        message.channel.send("Prefix has been changed to " + args[0]);
    }
};
