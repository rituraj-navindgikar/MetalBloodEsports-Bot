module.exports = {
    name: 'serverlist',
    execute(message,args,PREFIX,client,Discord){
        const textChannel = message.channel
        const permissions = textChannel.permissionsFor(message.client.user);
        if(!permissions.has('SEND_MESSAGES')) return;

client.guilds.cache.forEach((guild) => {
    message.channel.send(`\`${guild.name}\` has total of \`${guild.memberCount}\` members`)
  
});
console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} serverlist command used`)


}}