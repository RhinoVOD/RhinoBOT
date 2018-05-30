//Repeat a given message
exports.run = (client, message, args) => {
    let text = message.content.slice(4); //Remove prefix + command word
    message.channel.send(text);
};
