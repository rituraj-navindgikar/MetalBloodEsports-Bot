module.exports = {
    name : 'fun',
    description :"Fun mini games ",
   async  execute(message, args, PREFIX){
    if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
       const Discord = require('discord.js');
       if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
       Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
     
       const user = message.mentions.users.first() || message.member.user
     if(!message.content.startsWith(PREFIX) || message.author.bot) return undefined;
     
       const Embedfun = new Discord.MessageEmbed()

        .setColor('#0099f0')
        
        .setTitle('Fun Info')
        .setDescription(`Use this to know all fun commands \n 
        ** My Prefix Here is set as ${PREFIX}** `)
        .addField(`\`${PREFIX}tictactoe @user\``   , 'Play tictactoe with You friends!', true)
        .addField(`\`${PREFIX}afk reason \``, 'Set Your afk' , true)
        .addField(`\`${PREFIX}hangman\``   , `Play hangman, for info about hangman, \`${PREFIX}hginfo\`!`, true)
        .addField(`\`${PREFIX}steal :emoji: \``, 'Bot copies the emoji(also u can specify more than one emoji), and uploads that emoji in your server!(only for member with role \`Manage_Server\`)'        , true)
        .addField(`\`${PREFIX}set-channel #channel\``, 'sets the mentioned channel as counting channel'        , true)
        .addField(`\`${PREFIX}leaderboard\``, 'shows a reaction page of leaderboard of counting game'  , true)
        .addField(`\`${PREFIX}minesweeper\``   , 'Play minesweeper!', true)
        .addField(`\`${PREFIX}chatbot-channel #channel \``, 'An AI chat Bot which chats as if like a human, only in that specific channel'          , true)
        .addField(`\`${PREFIX}device @user\``, 'checks the device used by the mentioned user'        , true)
        .setFooter(`Bot Created And Developed By MTBxGREAT KING`)

         
         if(!args[0]) return  message.channel.send(Embedfun)+
         console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} help fun command used`)

          
    
    }}