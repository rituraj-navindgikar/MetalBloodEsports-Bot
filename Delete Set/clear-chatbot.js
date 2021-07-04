const db = require('quick.db')
module.exports = {
    name: 'clear-chatbot',
    async execute(message,args,PREFIX){
        if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.reply("You need `MANAGE_GUILD` perms to use this");
db.delete(`chatchannel_${message.guild.id}`)
db.delete(`bot_lan_${message.guild.id}`)
message.channel.send(`Removed Chatbot from the channel!`)
        
    }
}