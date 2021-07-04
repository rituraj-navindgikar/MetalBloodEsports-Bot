module.exports = {
    name : 'nuke',
    description :"clears the whole channel messages",
   async  execute(message, args, PREFIX){
       const Discord = require('discord.js');
       
    
       if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`\`\`\`I dont have permission to manage messages, 
       Please give me that role!\n To know what role u should give me type ${PREFIX}setup\`\`\``)
       if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
       Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
       if(!message.guild.me.hasPermission('ATTACH_FILES')) return message.channel.send(`\`i dont have permission in this channel to attach files,
       Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
      
        const gif = 'https://tenor.com/view/nuclear-catastrophic-disastrous-melt-down-gif-13918708'
if(!args[1]) 
        return await message.channel.messages.fetch(100).then(messages =>{
             message.channel.bulkDelete(100);
             message.channel.send('Nuked This channel 😎') + message.channel.send(gif)
             message.channel.send('\`\`if all msg not cleared do again.. max clearing limit 100 msgs\`\`').then(msg => msg.delete({timeout:2000})) 
              })
   
   
   
   
              console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} nuke command used`)
   
   
    }}