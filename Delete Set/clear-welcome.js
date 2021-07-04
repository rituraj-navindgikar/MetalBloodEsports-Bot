const db = require('quick.db')
module.exports = {
    name: 'clear-welcome',
    async execute(message,args,PREFIX){
        if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.reply("You need `MANAGE_GUILD` perms to use this");
db.delete(`welchannel_${message.guild.id}`)
message.channel.send(`Removed welcome from the channel!`)
        
    }
}