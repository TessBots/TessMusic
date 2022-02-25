exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You are not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music playing !`);

    client.player.pause(message);

    message.channel.send(`${client.emotes.success} - Music ${client.player.getQueue(message).playing.title} **Pause** !`);

};
