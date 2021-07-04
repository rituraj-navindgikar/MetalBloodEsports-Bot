const db = require('quick.db')
module.exports = {
name: 'greet',
    execute(message,args,PREFIX){
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
        const channel = message.mentions.channels.first()   

 if(!args[0])return message.channel.send(`Mention a channel name to set greetings foe new joiners in server\nCorrect usage is\n\`${PREFIX}greet <#channel>\``)
 if(!channel) return message.channel.send(`Error.. Couldn't find channel`)   
      
    db.set(`greet_${message.guild.id}`, channel.id)
   
      channel.send(`Done! This channel is set for me to give greetings to new comers`)
+ console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} set greet command used`)

    }}