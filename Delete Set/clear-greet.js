const db = require('quick.db')
module.exports = {
    name: 'clear-',
    async execute(message,args,PREFIX){
        if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.reply("You need `MANAGE_GUILD` perms to use this");
db.delete(`greet_${message.guild.id}`)
db.delete(`greetdel_${message.guild.id}`)
db.delete(`greetmsg_${message.guild.id}`)
message.channel.send(`Removed greeting from the channel!`)
    }
}