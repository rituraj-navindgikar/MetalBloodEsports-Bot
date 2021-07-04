module.exports = {

    name:'unban',
  async execute(message,args){
const Discord = require('discord.js')
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You don\'t have permission to do that')
if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(`\`\`\`i dont have permission to ban/kick,
Please give me that role!\n To know what role u should give me type ${PREFIX}setup\`\`\``)   

        const member = args[0];
        var reason = args.slice(1).join(' ') || `Not Specified`;
      
     if(!member) {return message.reply(`Enter the User id to unban`)
  }
  try{

    message.guild.fetchBans().then(bans =>{
      message.guild.members.unban(member)
    })
       await message.channel.send(`${member} is unbanned`);
 } catch(e){
    return message.channel.send(`An Error occurred `)
  }
  console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} unban command used`)
    }}
