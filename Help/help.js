module.exports = {
    name : 'help',
    description :"Help ",
   async  execute(message, args, PREFIX){
    if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
       const Discord = require('discord.js');
       if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
       Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
        
       const user = message.mentions.users.first() || message.member.user
     if(!message.content.startsWith(PREFIX) || message.author.bot) return undefined;
     
       const Embedhelp = new Discord.MessageEmbed()

        .setColor('#0099ff')
        
        .setTitle('Help Info')
        .setDescription(`Use this to know all bot commands \n 
        ** My Prefix Here is set as ${PREFIX}** `)
      //  .addField(`${PREFIX}moderation`   , '\`All Moderation Commands\`' , true)
        .addField(`${PREFIX}commands`, '\`Know basic commands\`'          , true)
    //    .addField(`${PREFIX}setup`   , `\`Follow the setup instructions\``, true)
        .addField(`${PREFIX}music`  , '\`Music Commands(in Development)\`', true)
        .addField(`${PREFIX}fun`   , '\`Have some mini games!\`'          , true)
   //     .addField(`${PREFIX}stuff`    , '\`Random stuff which bot can do!\`'     , true)
      //  .addField(`${PREFIX}info`    , '\`Basic information of bot\`'     , true)
        .addField(`${PREFIX}slots`    , '\`Slot List Making\`'     , true)
        
        .setFooter(`Bot Created And Developed By MTBxGREAT KING`)

         
         if(!args[0]) return message.channel.send('Hey! here\'s your help') + message.channel.send(Embedhelp)+
         console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} help command used`)

          return; 
    
    }}