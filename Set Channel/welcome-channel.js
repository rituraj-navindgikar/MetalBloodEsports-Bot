const db = require('quick.db')
module.exports = {
    name: 'welcome-channel',
    execute(message,args,PREFIX){
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
        if(!message.member.hasPermission('MANAGE_GUILD')) return undefined;
   

if(!args[0]) return message.channel.send(`Mention a channel for settting welcome messages\nCorrect usage is\n\`${PREFIX}welcome-channel <#channel>\``)
const channel = message.mentions.channels.first()

if(!channel) return message.channel.send(`Error.. Couldn't find channel\nCorrect usage is\n\`${PREFIX}welcome-channel <#channel>\``)

db.set(`welchannel_${message.guild.id}`, channel.id)

message.channel.send(`Done! ${channel} channel is set as invite tracking channel`)
+ console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} set invite tracking command used`)

    }}