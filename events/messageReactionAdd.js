//Launched when a reaction is added to a message
exports.run = (client, reaction, user) => {
    const config    = require("../config.json");
    const message   = reaction.message;
    const starboard = config.starboardChannel;

    //Ignore reactions that aren't a star
    if (reaction.emoji.name !== '⭐') return;
    //Remove self star reactions
    if (message.author.id === user.id && reaction.emoji.name === '⭐' && message.guild.me.hasPermission("MANAGE_MESSAGES"))
        return reaction.remove(reaction.message.author.id);



    const fetch = message.guild.channels.get(starboard).fetchMessages({limit: 100})
        .then(messages => console.log(`Received ${messages.size} messages`))
        .catch(console.error);

    const stars = fetch.find(m => m.embeds[0].footer.text.startsWith('⭐') && m.embeds[0].footer.text.endsWith(message.id));

    if (stars) {
        const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(stars.embeds[0].footer.text);
        const foundStar = stars.embeds[0];
        const image = message.attachments.size > 0 ? this.extension(reaction, message.attachments.array()[0].url) : '';
        const embed = new RichEmbed()
            .setColor(foundStar.color)
            .setDescription(foundStar.description)
            .setAuthor(message.author.tag, messsage.author.displayAvatarURL)
            .setTimestamp()
            .setFooter(`⭐ ${parseInt(star[1]) + 1} | ${message.id}`)
            .setImage(image);
        const starMsg = message.guild.channels.find('name', starboardChannel).fetchMessage(stars.id);
        starMsg.edit({embed});
    }
    if (!stars) {
        if (!message.guild.channels.exists('name', starboardChannel)) throw `No starboard channel`;

        const image = message.attachments.size > 0 ? this.extension(reaction, message.attachments.array()[0].url) : ``;
        if (image === `` && message.cleanContent.length < 1)
            return message.channel.send(`You cannot star an empty message`);

        const embed = new RichEmbed()
            .setColor(15844367)
            .setDescription(message.cleanContent)
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp(new Date())
            .setFooter(`⭐ 1 | ${message.id}`)
            .setImage(image);
        message.guild.channels.find('name', starboard).send({embed});
    }

    console.log("Hello");
};
