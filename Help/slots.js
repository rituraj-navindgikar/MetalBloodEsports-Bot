module.exports = {
    name : 'slots',
    description :"slots help",
   async  execute(message, args, PREFIX){
    if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
       const Discord = require('discord.js');
       if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
       Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
        
       const user = message.mentions.users.first() || message.member.user
     if(!message.content.startsWith(PREFIX) || message.author.bot) return undefined;
     
       const Embedhelp = new Discord.MessageEmbed()

        .setColor('RANDOM')
        
        .setTitle('Slots Info')
      
        .addField(`${PREFIX}slot-start descripton`   , '\`Allow members to start registering for slot list, also give description of event like time, map, etc\`' , true)
        .addField(`${PREFIX}slot-list`, '\`Display Slot list\`'          , true)
        .addField(`${PREFIX}s1 Team Name`   , `\`Register for slot 1.. same to do for other 25 slots\``, true)
        .addField(`${PREFIX}slot-clear`  , '\`Clear All team names from slot list\`', true)
        .addField(`${PREFIX}slot-del number`  , `\`Clear a specific team name from slot list.. example - to clear the 2nd slot team use \`${PREFIX}slot-clear 2\``, true)

        .setFooter(`Bot Created And Developed By MTBxGREAT KING`)

         message.channel.send(Embedhelp)+
         console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} slots help command used`)

          return; 
    
    }}