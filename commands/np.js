exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You are not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} -  No music playing !`);

    const track = await client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
        if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
    });

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: track.title },
            footer: { text: 'Tess Bots / 2021' },
            fields: [
                { name: 'Channel', value: track.author, inline: true },
                { name: 'Ask by', value: track.requestedBy.username, inline: true },
                { name: 'From the playlist', value: track.fromPlaylist ? 'Oui' : 'Non', inline: true },

                { name: 'Views', value: track.views, inline: true },
                { name: 'Duration', value: track.duration, inline: true },
                { name: 'Filters enabled', value: filters.length, inline: true },

                { name: 'Progression', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};
