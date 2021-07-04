
module.exports = {
    name: 'userroles',
    execute(message,args,PREFIX){
        const textChannel = message.channel
        const permissions = textChannel.permissionsFor(message.client.user);
        if(!permissions.has('SEND_MESSAGES')) return;
             if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
        Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
      
   const Discord = require('discord.js')
    const {guild,channel } = message
    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)
     
    const memberRoles = member.roles.cache
    .filter((roles) => roles.id !== message.guild.id)
    .map((role) => role.toString());

    const embeduserrole = new Discord.MessageEmbed()
    .setAuthor(`Roles of ${member.user.tag} in ${message.guild.name}`,
    member.user.displayAvatarURL())
    .setDescription(`${member}'s roles are\n${memberRoles}`)
    .setColor('RANDOM')
    
    message.channel.send(embeduserrole)+
    console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} userroles command used`)

    
    
    }}