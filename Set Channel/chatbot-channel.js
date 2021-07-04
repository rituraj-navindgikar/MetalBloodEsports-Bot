const db = require('quick.db')
module.exports = {
    name: 'chatbot-channel',
    execute(message,args,PREFIX){
      if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
       if(!message.member.hasPermission('MANAGE_SERVER')) return message.channel.send(`You don\'t have permission to setup chatbot, Ask guild admin or someone with manage server role!, usage is \n\`${PREFIX}chatbot-channel <#channel>\``)
   
        const channel = message.mentions.channels.first()   
    

 if(!args[0])return message.channel.send(`Mention a channel name to set AI bot to chat with people in that channel\nCorrect usage is\n\`${PREFIX}chatbot-channel <#channel>\``)
 if(!channel) return message.channel.send(`Error.. Couldn't find channel`)   
      
    db.set(`chatchannel_${message.guild.id}`, channel.id)
   
      channel.send(`Done! This channel is set for me to chat with you all!!, also ${message.author}, please specify language of communication by typing \`${PREFIX}bot-language <language>\` note '<>' is not required`)
     + console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} set chatbot command used`)

    }}