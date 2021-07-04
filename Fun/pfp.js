const { MessageEmbed } = require("discord.js");
const { execute } = require("../Moderation Commands/clear");

module.exports = {
    
    name:'pfp',
    description:'shows profile pic of user',
     execute(message){
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
        if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
        Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
      
        const Discord = require('discord.js')
        const member = message.mentions.users.first() || message.member.user   
 
 
        const embedpfp = new Discord.MessageEmbed()
        .setAuthor(`Profile Pic of ${member.username}`)
        .setColor('#00FFFF')
       .setImage(member.displayAvatarURL({size: 2048}))

          message.channel.send(embedpfp)+
          console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} pfp command used`)

          
          
    }
}