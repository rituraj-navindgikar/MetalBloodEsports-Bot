module.exports = {
    name : 'clear',
    description :"Clear Messages",
  async execute(message, args, PREFIX){
       const Discord = require('discord.js');

       const Embedclear = new Discord.MessageEmbed()                         
       .setTitle(`Deleted ${args[0]} messages`)
       .setColor('#32CD32')

       if(!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("You don\'t have permission to clear message");
        
      //  if(!message.guild.me.hasPermission('MANAGE_CHANNELS' )) return message.channel.send(`\`\`\`i dont have permission to manage guild,
      //   Please give me that role!\n To know what role u should give me type ${PREFIX}setup\`\`\``)
      if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`\`i dont have permission in this channel to manage messages,
      Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
    
         if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
         Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
       
         if(isNaN(args[0]))return message.channel.send("Error, type a real number").then(msg => msg.delete({timeout:5000}))
                    
         if(args[0] > 100)return message.channel.send("Type a number less than or equal to 100").then(msg => msg.delete({timeout:5000}))
         if(args[0] < 1)  return message.channel.send("Type a number greater than or equal to 1").then(msg => msg.delete({timeout:5000}))

         await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
           //console.log(+args[0] + 1)  
          message.channel.bulkDelete(+args[0]);
             message.channel.send(Embedclear).then(msg => msg.delete({timeout:2000}));
                   
         })

 }}