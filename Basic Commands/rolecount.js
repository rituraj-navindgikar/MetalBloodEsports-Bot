const Discord = require('discord.js')

module.exports = {
    name:'rolecount',
  async execute(message,args,PREFIX){
    const textChannel = message.channel
    const permissions = textChannel.permissionsFor(message.client.user);
    if(!permissions.has('SEND_MESSAGES')) return message.author.send(`Sorry I dont have permission to send message in channel \`${message.channel.name}\` for your command \`embed\``);
  const { guild } = message
if(!args[0]){message.channel.send(`Specify the id of role, Correct usage is\n\`${PREFIX}rolecount roleID\``)
}
else if(isNaN(args[0])){message.channel.send(`Specify the id of role and not \`${args[0]}\`, Correct usage is\n\`${PREFIX}rolecount roleID\``)}
else {     
    let roleID = args[0];
    if(!roleID) return message.channel.send(`That role id does not exist!`)
     let memberCount = guild.roles.cache.get(roleID).members.size;
     let embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`\`${memberCount}\` members have role <@&${roleID}>!`)
     message.channel.send(embed);
}

console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} rolecount command used`)

}}