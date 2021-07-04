const db = require('quick.db')
const ms = require('ms')
module.exports = {
name: 'greetdel',
    execute(message,args,PREFIX){
   
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
       const time = ms(args[0])
       if(!time) { message.channel.send(`Make sure to input a valid number for time Correct usage is \n\`${PREFIX}greetdel <number>hr/min/sec\``);
return;
} 
if(isNaN(time)) return message.channel.send(`Invalid time`)
db.set(`greetdel_${message.guild.id}`, time)
   
message.channel.send(`Done!! greet messages will be deleted after ${time/1000} seconds`)
+ console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} greetdel command used`)
  
}}