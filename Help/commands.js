module.exports = {
    name : 'commands',
    description :"Commands of Bot",
   async  execute(message, args, PREFIX){
    if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
       const Discord = require('discord.js');
       if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
       Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
     
        const Embedcommands = new Discord.MessageEmbed()            


        .setTitle('**Commands Help**')                          
               .addFields(
              {name: `**${PREFIX}listban**`      , value: `\`To check List of banned people\``},
               {name: `**${PREFIX}userinfo**`     , value: `\`To see your just type ${PREFIX}userinfo, For others info mention **@user**\``}, 
               {name: `**${PREFIX}userroles**`     , value: `\`To see your just type ${PREFIX}userroles, For others roles mention **@user**\``}, 
               {name: `**${PREFIX}rolemembers @role**`         , value: `\`mention a role and then bot shows names of all those who have that role\``},
               {name: `**${PREFIX}rolecount role_id**`         , value: `\`mention a role id and then bot shows how many of them have that role\``},
             
          //     {name: `**${PREFIX}poll**`         , value: `\`A simple Yes/No poll, justspace and type your poll\``},
               {name: `**${PREFIX}pfp @user**`         , value: `\` use can be ${PREFIX}pfp @user or ${PREFIX}pfp \``},
               {name: `**${PREFIX}top-invites <number>**`         , value: `\`shows top invites of your server\``},
               {name: `**${PREFIX}membercount**`         , value: `\`Member Count of your server\``},
               {name: `**${PREFIX}serverinfo**`         , value: `\`Shows all details about server\``},
               {name: `**${PREFIX}channelinfo**`         , value: `\`Shows all details about channel\``},
      //         {name: `**${PREFIX}serverlist**`         , value: `\`Shows all server names in which bot is\``},
               {name: `**${PREFIX}clear-chatbot**`         , value: `\`Removes bot from that channel\``},
               {name: `**${PREFIX}clear-welcome**`         , value: `\`Clears the set channel\``},
               {name: `**${PREFIX}clear-greet**`         , value: `\`Clears the set channel\``},
             
            // {name: `**${PREFIX}multipoll**`  , value: `\`A multiple choice poll, eg:- ${PREFIX}multipoll "yes" "no" "maybe" "cant say" Are you fine?\``},  
                            )                   
        .setColor('#34D51B')
        .setFooter(`Bot Created And Developed By MTBxGREAT KING`)

  if(!args[0]) return message.channel.send(Embedcommands)+
  console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} help commands command used`)


    }}