//Display a message with a random number
exports.run = (client, message, args) => {
    var rng = Math.floor(Math.random() * 101); //Int from 0-100

    message.reply(` you have a ${rng}% chance of cancer.`)
};
