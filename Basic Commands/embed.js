module.exports ={
    name:'embed',
    description:'make embeds',
   async execute(message,args,PREFIX){
    const Discord = require('discord.js')
    const client = new Discord.Client()
       if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
    Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
  setTimeout(function(){
    if(!args.length) return message.channel.send(`Please specify a description\nCorrect usage is\`\`${PREFIX}embed DESCRIPTION\`\``)
 
    let description = args.join(' ')
    
    if(description > 2047){ message.channel.send("Description is longer than discord embed character limit (2048) try splitting up the embed")
return;} else{
    const embedembed = new Discord.MessageEmbed({size:2048})
    .setDescription(description)
    .setColor('RANDOM')
    message.channel.send(embedembed) +
    console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} embed`)

    if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`\`i dont have permission in this channel to manage messages,
    You yourself delete that message which YOU have typed!`)   
  
    message.delete({timeout:2000}).catch(console.error)     
    
}
   },4000)

   }}
