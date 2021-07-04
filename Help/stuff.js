module.exports = {
    name : 'stuff',
    description :"Fun",
   async  execute(message, args, PREFIX){
    if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
       const Discord = require('discord.js');

       if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
       Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
     
       if(!message.guild.me.hasPermission('ATTACH_FILES')) return message.channel.send(`\`i dont have permission in this channel to attach files,
       Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
     
       const user = message.mentions.users.first() || message.member.user
     if(!message.content.startsWith(PREFIX) || message.author.bot) return undefined;
     
       const Embedstuff = new Discord.MessageEmbed()

        .setColor('RANDOM')
        
        .setTitle('Stuff Info')
        .addField(`\`${PREFIX}joke\``   , 'Gives a random Joke', true)
       // .addField(`\`${PREFIX}devjoke\``   , 'Gives a random devjoke', true)
      //  .addField(`\`${PREFIX}insult\``, 'Gives a random Insult for you' , true)
       .addField(`\`${PREFIX}punch @user\``, 'Mention a user to punch him'  , true)
       // .addField(`\`${PREFIX}food\``, 'Gives a random delicious food image'  , true)
     //   .addField(`\`${PREFIX}vase\``, 'returns a vase image' , true)
        .addField(`\`${PREFIX}cat\``, 'returns a cat image' , true)
        // .addField(`\`${PREFIX}duck\``, 'returns a duck image'   , true)`
     //   .addField(`\`${PREFIX}aww\``, 'returns a cute moment'        , true)
     //   .addField(`\`${PREFIX}meme\``, 'returns a cool meme :)'        , true)
       // .addField(`\`${PREFIX}dankmeme\``, 'returns a dank meme :o'        , true)
       // .addField(`\`${PREFIX}facepalm\``, 'returns a facepalm moment'        , true)
       // .addField(`\`${PREFIX}hpmeme\``, 'returns a harry potter meme'        , true)
        //.addField(`\`${PREFIX}wholesome\``, 'returns a wholesome meme'        , true)
   //     .addField(`\`${PREFIX}art\``, 'returns cool art pic'        , true)
  //      .addField(`\`${PREFIX}deadinside\``, 'returns a "Watch people die inside" moment  '        , true)
        
        
        .setFooter(`Bot Created And Developed By MTBxGREAT KING`)

         
         if(!args[0]) return  message.channel.send(Embedstuff)+
         console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} help stuff command used`)

          
    
    }}