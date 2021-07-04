
module.exports = {
    name: 'ping',
    execute(message,args,client){
      if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
const Discord = require('discord.js')

if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   


          message.channel.send("Pinging...").then(m =>{
           
        var yourping = m.createdTimestamp - message.createdTimestamp;
        var botping = Math.round(message.client.ws.ping)
              
              
           
              var embedping = new Discord.MessageEmbed()
              .setDescription(`Your ping is \`${yourping}\`ms\nBot's ping is \`${botping}\`ms`)
              .setColor("RANDOM")
                    m.edit(embedping)
          })+ console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} ping command used`)

  
   
        }
}