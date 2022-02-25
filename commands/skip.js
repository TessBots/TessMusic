exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You are not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music playing !`);

    client.player.skip(message);

    message.channel.send(`${client.emotes.success} - The current music has just been **skip** !`);

};
