const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL","REACTION"]});
client.commands =new Discord.Collection();  
require('dotenv').config()
const chatChannel = require('./Set Channel/chatbot-channel')
module.exports = client;
const db = require('quick.db')
const PREFIX = ',';
const fs = require('fs');
const ms = require('ms')
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { Random } = require('random-thing-for-discord');
const random = new Random();
process.on('warning', e => console.warn(e.stack));    


    const commandsFiles1 = fs.readdirSync('./Moderation Commands/').filter(file => file.endsWith('js'));
     for(const file of commandsFiles1)
  {
        const commands = require(`./Moderation Commands/${file}`);
        client.commands.set(commands.name, commands); 
  }

    const commandsFiles2 = fs.readdirSync('./Basic Commands/').filter(file => file.endsWith('js'));
    for(const file of commandsFiles2)
  {
        const commands = require(`./Basic Commands/${file}`);
        client.commands.set(commands.name, commands); 
  }
    const commandsFiles3 = fs.readdirSync(`./Help/`).filter(file => file.endsWith('js'));
    for(const file of commandsFiles3)
  {
        const commands = require(`./Help/${file}`);
        client.commands.set(commands.name, commands);
  }  
    const commandsFiles5 = fs.readdirSync(`./Fun/`).filter(file => file.endsWith('js'));
    for(const file of commandsFiles5)
  {
        const commands = require(`./Fun/${file}`);
        client.commands.set(commands.name, commands);
  }
    const commandsFiles6 = fs.readdirSync(`./Set Channel/`).filter(file => file.endsWith('js'));
    for(const file of commandsFiles6)
  {
        const commands = require(`./Set Channel/${file}`);
        client.commands.set(commands.name, commands);
  }
    const commandsFiles7 = fs.readdirSync(`./Welcome/`).filter(file => file.endsWith('js'));
    for(const file of commandsFiles7)
  {
        const commands = require(`./Welcome/${file}`);
        client.commands.set(commands.name, commands);
  }
  const commandsFiles8 = fs.readdirSync(`./Slot List/`).filter(file => file.endsWith('js'));
  for(const file of commandsFiles8)
{
      const commands = require(`./Slot List/${file}`);
      client.commands.set(commands.name, commands);
}

const commandsFiles10 = fs.readdirSync(`./Delete Set/`).filter(file => file.endsWith('js'));
for(const file of commandsFiles10)
{
    const commands = require(`./Delete Set/${file}`);
    client.commands.set(commands.name, commands);
}
const commandsFiles11 = fs.readdirSync(`./Music/`).filter(file => file.endsWith('js'));
for(const file of commandsFiles11)
{
    const commands = require(`./Music/${file}`);
    client.commands.set(commands.name, commands);
}
const commandsFiles12 = fs.readdirSync(`./src/`).filter(file => file.endsWith('js'));
for(const file of commandsFiles12)
{
    const commands = require(`./src/${file}`);
    client.commands.set(commands.name, commands);
}


  //const inviteNotifications = require('./Welcome/invite-notifications')

  client.on('ready', () => {
  console.log(`${client.user.username} is online!`);
  //inviteNotifications(client)

    let watching = [`${PREFIX}help`, 
      'Working For MTB Server']
    setInterval(function() {
     let viewing = watching[Math.floor(Math.random() * watching.length)];
     client.user.setActivity(viewing, {type:"WATCHING" });
 }, 2400000)
}) 

const talkedRecently = new Set();
const { timeout } = require('reconlx');
const { time } = require('console');
client.on('message',async message => { 
  let chatChannel = '794552577835794442' || db.get(`chatchannel_${message.guild.id}`)
 
   if(chatChannel === null|| undefined){undefined} 
if(message.channel.id === chatChannel)return;
const msgs =[`Hey There!! Supp? ${message.author.username} <a:hype:759725271245914113><a:hype:759725271245914113>`, `Hello ${message.author.username} <a:zv_BeeHello:815523423051579392> `,
`Hello <a:Panda_Hi:815522916891361320><a:Panda_Hi:815522916891361320>`, `Hey there! Ssup??`,`Ohh!! Hi <a:zv_BeeHello:815523423051579392><a:zv_BeeHello:815523423051579392>`, `<a:Panda_Hi:815522916891361320><a:Panda_Hi:815522916891361320>`]
 let randomMessage = msgs[Math.floor(Math.random() * msgs.length)]
 if(message.author.bot) return; 
if (talkedRecently.has(message.author.id)) {return undefined} else {
      if(message.content === 'hi' || message.content === 'Hi' || message.content ==='HI' ||
     message.content === 'hey' || message.content === 'Hey'|| message.content === 'HEY')
   var messageToDelete = await message.channel.send(randomMessage)
   if(!messageToDelete)return undefined;
   timeout(message, messageToDelete, 10000);
    talkedRecently.add(message.author.id);
  setTimeout(() => {talkedRecently.delete(message.author.id)
;}, 60000);
}

})


client.on('message', async message =>{
if(message.type == 'dm') return;
if(message.content.startsWith(`member <@711837685739946004> not received`)){
message.delete({timeout:10})
}

  if(message.author.bot)return;

  if(db.has(`afkmember_${message.author.id}&&${message.guild.id}`))
  {
    let reason = db.get(`afkreason_${message.author.id}&&${message.guild.id}`)
  message.reply(`\`Welcome! Your afk status\` ${reason} \`is removed\``).then(msg => msg.delete({timeout:5000}));
  db.delete(`afkmember_${message.author.id}&&${message.guild.id}`);
  db.delete(`afkreason_${message.author.id}&&${message.guild.id}`);
  db.delete(`afktime_${message.author.id}`);
}

else if(message.mentions.members.first())
{
  var mentioned_person = message.mentions.members.first()
var reason = db.get(`afkreason_${message.mentions.members.first().id}&&${message.guild.id}`);
var time_ago = db.get(`afktime_${message.mentions.members.first().id}`);
//console.log(mentioned_person.id, reason, time_ago)
  let afk_time;
 var milliseconds = Date.now() - time_ago

 if(Math.floor(milliseconds) >= 25200000){
  afk_time = "Zamana beet gaya afk ho kr"
}else if(Math.floor(milliseconds) >= 21600000){
  afk_time = "6 hours ago"
}else if(Math.floor(milliseconds) >= 18000000){
  afk_time = "5 hours ago"
}else if(Math.floor(milliseconds) >= 14400000){
  afk_time = "4 hours ago"
}else if(Math.floor(milliseconds) >= 10800000){
  afk_time = "3 hours ago"
}else if(Math.floor(milliseconds) >= 7200000){
  afk_time = "2 hours ago"
}else if(Math.floor(milliseconds) >= 5400000){
  afk_time = "1 and half hour ago";
}else if(Math.floor(milliseconds) >= 3600000){
  afk_time = "Less than 1 hour ago";
}else if(Math.floor(milliseconds) >= 1800000){
  afk_time = "30 minuntes ago";
}else if(Math.floor(milliseconds) >= 1200000){
  afk_time = "20 minuntes ago";
}else if(Math.floor(milliseconds) >= 900000){
  afk_time = "15 minuntes ago";
}else if(Math.floor(milliseconds) >= 180000){
  aft_time = "Few minutes ago";
}else if(Math.floor(milliseconds) >= 120000){
  afk_time = "A few seconds ago!";
}else if(Math.floor(milliseconds) <= 120000){
  afk_time = "A few seconds ago!";
}else if(Math.floor(milliseconds) >=0){
  afk_time = "A few seconds ago!";
}

  if(db.has(`afkmember_${mentioned_person.id}&&${message.guild.id}`))
  {  

   let embedAFK = new Discord.MessageEmbed()
    .setColor("RANDOM")
       .setDescription(`User ${mentioned_person} -  ${reason}`)
       .setFooter(`Said this - ${afk_time}`);
   return message.channel.send(embedAFK);
  }
}
  })


const Booked_Slot = new Set()
client.on('message', message => {                                       
    if(!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);                   
    const command = args.shift().toLowerCase()
     if(command==='apply'){
           const ebed = new Discord.MessageEmbed()
           .setTitle('**Here! register for MTB Staff**')
           .setDescription(`[MTB Staff Recruitment](https://docs.google.com/forms/d/e/1FAIpQLSfgJpJ2JljjwiKmu5MFBZND9Doc1qOWb1C3BdF3PFLATTp4jQ/viewform?usp=sf_link)`)
           .setFooter('MTB Team')
             message.channel.send(ebed)
           }
         
   if(command === 'userinfo'){
      client.commands.get('userinfo').execute(message, args, PREFIX);
    }
    else if(command === 'embed'){
      client.commands.get('embed').execute(message, args, PREFIX);
    }
    else if(command === 'userroles'){
      client.commands.get('userroles').execute(message, args, PREFIX);
    }
    else if(command === 'serverlist'){
      client.commands.get('serverlist').execute(message, args, PREFIX,client, Discord);
    }
    else if(command === 'serverinfo'){
      client.commands.get('serverinfo').execute(message, args, PREFIX, client, Discord);
    }


    else if(command === 'clear'){
      client.commands.get('clear').execute(message, args, PREFIX);                          
    }                                                                            
 
    else if(command ==='listban'){
      client.commands.get('listban').execute(message, args, PREFIX);                                                                                            
    }
 
     else if(command === 'nuke'){
      client.commands.get('nuke').execute(message, args, PREFIX);
    }
    else if(command === 'lock'){
      client.commands.get('lock').execute(message,args,PREFIX);
    }
    else if(command === 'unlock'){
      client.commands.get('unlock').execute(message,args,PREFIX);
    }
    else if(command === 'unlockdown'){
      client.commands.get('unlockdown').execute(message,args,PREFIX);
    }
    else if(command === 'createrole'){
      client.commands.get('createrole').execute(message,args,PREFIX);
    }
    else if(command === 'warn'){
      client.commands.get('warn').execute(message, args, PREFIX,client, Discord);                          
    }
    else if(command === 'nickname'){client.commands.get('nickname').execute(message, args, PREFIX,client, Discord);}  
    else if(command === 'nick'){client.commands.get('nickname').execute(message, args, PREFIX,client, Discord);                          
    }                        
    


    else if(command ==='help'){
      client.commands.get('help').execute(message, args, PREFIX);
    }
    else if(command === 'fun'){
      client.commands.get('fun').execute(message, args, PREFIX);
    }
    else if(command === 'commands'){
      client.commands.get('commands').execute(message, args, PREFIX);
    }
 
    else if(command === 'stuff'){
      client.commands.get('stuff').execute(message, args, PREFIX);
    }
    else if(command === 'slots'){
      client.commands.get('slots').execute(message, args, PREFIX);
    }
    else if(command === 'hginfo'){
      client.commands.get('hginfo').execute(message, args, PREFIX);
    }




    else if(command === 'tictactoe'){
      client.commands.get('tictactoe').execute(client, message, args,PREFIX)
    } 
    else if(command === 'hangman'){
      client.commands.get('hangman').execute(client, message, args,PREFIX)
    } 
    else if(command === 'minesweeper'){
      client.commands.get('minesweeper').execute(client, message, args)
    }  
    else if(command === 'pfp'){
      client.commands.get('pfp').execute(message)
    } 
    else if(command === 'ping'){
      client.commands.get('ping').execute(message,client)
    }
    else if(command === 'rolecount'){
      client.commands.get('rolecount').execute(message,args,PREFIX)
    }
    else if(command === 'rolemembers'){
      client.commands.get('rolemembers').execute(message,args,PREFIX)
    }
    else if(command === 'afk'){
      client.commands.get('afk').execute(message,args,PREFIX)
    }
    else if(command === 'bot-language'){
      client.commands.get('bot-language').execute(message,args,PREFIX)
    }

    else if(command === 'cat'){
      client.commands.get('cat').execute(message,args,PREFIX, client)
    }
    else if(command === 'dog'){
      client.commands.get('dog').execute(message,args,PREFIX, client)
    }
    else if(command === 'food'){
      client.commands.get('food').execute(message,args,PREFIX, client)
    }
    else if(command === 'steal'){
      client.commands.get('steal').execute(message,args,PREFIX, client)
    }
    else if(command === 'chatbot-channel'){
      client.commands.get('chatbot-channel').execute(message,args,PREFIX)
    } 
    else if(command === 'welcome-channel'){
      client.commands.get('welcome-channel').execute(message,args,PREFIX)
    } 


   
   else if(command === 'top-invites'){
     client.commands.get('top-invites').execute(message,args,PREFIX)
   }
   else if(command === 'greet'){
     client.commands.get('greet').execute(message,args,PREFIX)
   }
   else if(command === 'greetdel'){
     client.commands.get('greetdel').execute(message,args,PREFIX)
   }
   else if(command === 'greetmsg'){
     client.commands.get('greetmsg').execute(message,args,PREFIX)
   }

   else if(command === 'slot-del'){
    client.commands.get('slot-del').execute(message,args,PREFIX)
  } else if(command === 'slot-start'){
    client.commands.get('slot-start').execute(message,args,PREFIX)
  } else if(command === 'slot-clear'){
    client.commands.get('slot-clear').execute(message,args,PREFIX,Booked_Slot)
  } else if(command === 'slot-list'){
    client.commands.get('slot-list').execute(message,args,PREFIX)
                                                  }else if(command === 's1'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's2'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's3'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's4'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's5'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's6'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's7'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's8'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's9'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's10'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's11'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's12'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's13'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's14'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's15'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's16'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's17'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's18'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's19'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's20'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's21'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's22'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's23'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's24'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)}else if(command === 's25'){
    client.commands.get('s').execute(message,args,PREFIX,Booked_Slot)
  }                                                          else if(command === 'nice'){
    client.commands.get('nice').execute(message,args,PREFIX)}else if(command === 'op'){
    client.commands.get('nice').execute(message,args,PREFIX)}else if(command === 'kadk'){
    client.commands.get('nice').execute(message,args,PREFIX)
  }
  else if(command === 'clear-chatbot'){
    client.commands.get('clear-chatbot').execute(message,args,PREFIX)
  }
  else if(command === 'clear-greet'){
    client.commands.get('clear-greet').execute(message,args,PREFIX)
  }
  else if(command === 'clear-welcome'){
    client.commands.get('clear-welcome').execute(message,args,PREFIX)
  }
  else if(command === 'lockdown'){
    client.commands.get('lockdown').execute(message,args,PREFIX);
  }
  else if(command === 'play'){
    client.commands.get('play').execute(message, args)}else if(command === 'p'){
    client.commands.get('play').execute(message, args)                           
  } 
  else if(command === 'disconnect'){
    client.commands.get('disconnect').execute(message,args)}else if(command === 'dis'){
    client.commands.get('disconnect').execute(message,args)}else if(command === 'stop'){
    client.commands.get('disconnect').execute(message,args)
  }
  else if(command === 'join'){
    client.commands.get('join').execute(message,args,PREFIX)}else if(command == 'j'){
    client.commands.get('join').execute(message,args,PREFIX)

  } 
   else if(command === 'leaderboard'){
    client.commands.get('leaderboard').execute(client, message,args);
  }
  else if(command === 'set-channel'){
    client.commands.get('set-channel').execute(client, message,args);
  }
  else if(command === 'devices'){
    client.commands.get('devices').execute(message,args, PREFIX, client, Discord);
  }else if(command === 'device'){client.commands.get('devices').execute(message,args,PREFIX,client,Discord)}
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//play songs in chatbot channel

client.on('message', async message=>{
  let chatChannel = '794552577835794442' || db.get(`chatchannel_${message.guild.id}`)
if(chatChannel === null){return;} 
  const args = message.content.slice(PREFIX.length).split(/ +/); 
  if(message.content.startsWith('play') || message.content.startsWith('Play')){
  if(message.author.bot)return;
  let channelofchat   = client.channels.cache.get(chatChannel);                
  if (message.channel.id === chatChannel){
    const voiceChannel = message.member.voice.channel
    if(!voiceChannel) return channelofchat.send('Please be in a voice channel, I will play songs\n play <song name>')
    
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has('CONNECT')) return channelofchat.send(`i dont have permission to Connect to that voice channel, Please give me that role!\n To know what role u should give me type **y!setup**`)   
    if(!permissions.has('SPEAK')) return channelofchat.send(`i dont have permission to Speak to that voice channel, Please give me that role!\n To know what role u should give me type **y!setup**`)   
  
   const connection = await voiceChannel.join()
   const videoFinder = async(query) =>{
  const videoResult = await ytSearch(query);
 
  return(videoResult.videos.length > 1) ? videoResult.videos[0] : null
                                   }
   const video = await videoFinder(args.join(' '));
   if(video){
    
     
       const stream = ytdl(video.url, {filter: 'audioonly'});
       connection.play(stream, {sneek: 0, volume: 1})
       .on('finish',()=>{
           voiceChannel.leave();
       });
  }
channelofchat.send(`**Now Playing** \`${video.title}\``)
  }
}
if(message.content.includes('stop') || message.content.startsWith('Stop') || message.content.startsWith('leave') || message.content.startsWith('Leave')){
if(message.author.bot)return;    

let channelofchat   = client.channels.cache.get(chatChannel);          
  if (message.channel.id === chatChannel){

const voiceChannel = message.member.voice.channel
if(!voiceChannel) return channelofchat.send('Please be in a voice channel')
  await voiceChannel.leave()
  channelofchat.send(`Stopping music!`)
  }}
  
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// AI chat bot here
client.on('message',async message=>{
  try{
  var chatChannel = '794552577835794442' 
  if(chatChannel == null){return}  

     let content = message.content;   
     let channelofchat = client.channels.cache.get(chatChannel);
     if(message.channel.id === chatChannel){
 if(message.author.bot)return;

try{
  const Chat = require("easy-discord-chatbot");
  const chat = new Chat({ name: "Metal Blood Esports" });
  let reply = await chat.chat(content);
  channelofchat.send(reply)
           }
       catch(err)
          {
            message.channel.send(`${err}`)
          }  
     }
    } catch(err){
      console.log(err)
    }
})
///////////////////////////////////////////////////////////////////////////////////
//  client.on('message', message =>{
    // const textChannel = message.channel
    // const permissions = textChannel.permissionsFor(message.client.user);
    // if(!permissions.has('SEND_MESSAGES')) return;
//     const msgs =[//`Ha bol?? why ping?`,
//     `Use \`${PREFIX}info\` or \`${PREFIX}help\` to know about me`,
//   //  `Hey!!`,
//   //   `Hello!`, 
//   //   `Yes?? how may i help?`,
//  //    `Ssup?!`,
//      `feeling bored? type out these new additions in me \`${PREFIX}stuff\``]
//      const kuchBhi = msgs[Math.floor(Math.random() * msgs.length)]
//       if(message.content.includes('793081176746098698')){//bot id
//       message.reply(kuchBhi) + 
//       console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} got pinged`)
//}
//})

   client.on('guildMemberAdd', async member => {
        
       const channelid = '750623569255333918';
       const channel = await client.channels.cache.get(channelid)
       const membercount = await member.guild.memberCount;
       
       await channel.send(`<a:redstar:836509946446610453>**Greetings From MTB Esports**<a:redstar:836509946446610453>
       Welcome to our server **${member}**
 Now we are a family of __**${membercount}**__ members <a:hype:759725271245914113>\n
<a:784339639539335188:854064293217566720> Do remember to take self roles from <#797363384797888543>\n
<a:784339639539335188:854064293217566720> Chat With our chatbot <#794552577835794442>\n
<a:784339639539335188:854064293217566720> Join our giveaways in <#843734479365472266>\n
<a:784339639539335188:854064293217566720>  Have fun in <#750623573395112007>`)+ 
       
   channel.send('https://images-ext-1.discordapp.net/external/q2E_EVBNiGs7eWcMepNGXhN8Xxa1ylEMai5uiY03pps/https/media.discordapp.net/attachments/712714975352979507/861265762111193128/standard2.gif')
 
       const channelselfrole = client.channels.cache.get('797363384797888543');
  channelselfrole.send(`Welcome To Metal Blood Esports! ${member} Here take your self role by reacting`).then(msg=>msg.delete({timeout: 10000}))
       
 })





client.on('message', async message => {                    
  if(!message.content.startsWith(PREFIX)) return;
  const args = message.content.slice(PREFIX.length).split(/ +/);                   
  const command = args.shift().toLowerCase()

  if(command == 'joke'){
    let data = await random.getJoke();
    message.channel.send(data);
  }
  else if(command == 'dog'){
    let data = await Random.getDog();
message.channel.send(data);
  }
  else if(command == 'cat'){
    let data = await Random.getCat();
message.channel.send(data);
  }
  else if(command == 'meme'){
    let data = await Random.getMeme();
message.channel.send(data);
  }
  else if(command == 'punch'){
    let data = await Anime.getPunch();
message.channel.send(data);
  }

})



const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rituraj:rishiraj18@metalbloodesportsbot.mo0gr.mongodb.net/Data', {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(console.log("Connected to Mongo db!"))

const db1 = require('./src/schemas/Guild')
const user = require('./src/schemas/Users')

client.on('message', async(message) => {
  const data = await db1.findOne({ id: message.guild.id })
  if(!data) return
  if(message.channel.id != data.Channel) return; // 870007206056169502

  if(parseInt(message.content) === data.Current+1){
    user.findOne({ id: message.author.id, Guild: message.guild.id }, async(err,data) => {
      if(err) throw err;
      if(data){
        data.Counts++;
      }else{
        data = new user({
          id: message.author.id,
          Guild: message.guild.id,
          Counts: 1
        })
      }
      data.save();
    })
  }else message.delete();
  data.Current = parseInt(message.content)
  data.save();
})

client.login(process.env.DJS_TOKEN);
return 0;
//0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟⏸️🔢👉
