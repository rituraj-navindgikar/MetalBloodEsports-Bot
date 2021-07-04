const db = require('quick.db')
module.exports = {
name: 'greetmsg',
    execute(message,args,prefix){
      if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
     const editedMSG = args.join(' ')
    if(!editedMSG) return message.channel.send(`Type some welcome message, Correct usage is \`${prefix}joinmsg <your message>\``)
 
    db.set(`greetmsg_${message.guild.id}`, editedMSG)
   
      message.channel.send(`Done! edited the welcome message`)
+ console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} greetmsg command used`)

    }}