module.exports = {
    name : 'massdm',
    description :"Dm's a member or a people with that role in a server",
   async  execute(message, args, PREFIX){

       const Discord = require('discord.js');
       const client = new Discord.Client();
       const{guild,channel } = message
       const user = message.mentions.users.first() || message.member.user
       const member = guild.members.cache.get(user.id)


  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You don\'t have permission to do that')
           var argresult = args.slice(1).join(' ');
           if (!args[0]) return message.reply('you need to provide a role')
           if (!args[1]) return message.reply('you need to provide a message')
      const role = message.mentions.roles.first()
    
               let embedmassdm1 = new Discord.MessageEmbed()
                   .setDescription(`:white_check_mark:   |   Successfully Sent the Message to all Server Members With role \'${role.name}\'`)
             .setColor("#00ff33")
             .setTitle ('Message Has been Sent.')
             .setImage('http://bit.ly/36Ske5f')
             .setTimestamp()
             .setFooter (`Message Sent to Role ${role.name} by ${message.author.username}`,user.displayAvatarURL());
               if (message.author.bot) return;
               if(message.author.member) return;
              message.channel.send(embedmassdm1)
              message.guild.roles.cache.get(role.id).members.forEach(member => member.send(argresult))
     }}
  


