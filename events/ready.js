module.exports = async (client) => {

    console.log(`Prêt pour ${client.guilds.cache.size} serveurs, pour un total de ${client.users.cache.size} utilisateurs`);

    client.user.setActivity(client.config.game);

};
