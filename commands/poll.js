//Create an emoji poll
exports.run = (client, message, args) => {
    if (args.length > 0 && args[0].match(/^[0-9]+$/) != null && 1 <= args[0] && args[0] <= 10) {
        let promise = addReaction(message, args[0]);
        promise.then();
    }
    else{
        message.react('👍')
            .then(() => message.react('👎'))
            .then(() => message.react('🤷'))
            .catch(() => console.error('One of the emojis failed to react.'));
    }
};

async function addReaction(message, value){
    let numberEmojis = [`1⃣`, `2⃣`, `3⃣`, `4⃣`, `5⃣`, `6⃣`, `7⃣`, `8⃣`, `9⃣`, `🔟`];

    for(let i = 0; i < value; ++i){
        await message.react(numberEmojis[i]);
    }
}
