exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You are not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music playing !`);

    const disabledEmoji = client.emotes.error;
    const enabledEmoji = client.emotes.success;

    const filtersStatuses = [[], []];

    Object.keys(client.filters).forEach((filterName) => {
        const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
        array.push(client.filters[filterName] + " : " + (client.player.getQueue(message).filters[filterName] ? enabledEmoji : disabledEmoji));
    });

    message.channel.send({
        embed: {
            color: 'ORANGE',
            footer: { text: 'Tess Bots / 2020' },
            fields: [
                { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
                { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
            ],
            timestamp: new Date(),
            description: `List of all filters enabled or disabled.\nUse \`${client.config.prefix}filter\` to add a filter to a song.`,
        },
    });

};
