//Create an emoji poll
exports.run = (client, message, args) => {
    message.react(`👍`);
    message.react(`👎`);
    message.react(`🤷`);
};
