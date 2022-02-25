exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You are not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music playing !`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Please specify a valid filter to enable or disable!`);

    const filterToUpdate = Object.values(client.filters).find((f) => f.toLowerCase() === args[0].toLowerCase());

    if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - The filter does not exist!`);

    const filterRealName = Object.keys(client.filters).find((f) => client.filters[f] === filterToUpdate);

    const queueFilters = client.player.getQueue(message).filters
    const filtersUpdated = {};
    filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
    client.player.setFilters(message, filtersUpdated);

    if (filtersUpdated[filterRealName]) message.channel.send(`${client.emotes.music} - I **add** the filter to the music, please wait ... Note: the longer the music, the longer it will take.`);
    else message.channel.send(`${client.emotes.music} - I **remove** the music filter, please wait ... Note: the longer the music, the longer it will take..`);

};
