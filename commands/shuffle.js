exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You are not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music playing !`);

    client.player.shuffle(message);

    return message.channel.send(`${client.emotes.success} - Mixed queue **${client.player.getQueue(message).tracks.length}** songs(s) !`);

};
