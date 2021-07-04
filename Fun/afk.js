const { MessageEmbed, Collection } = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: 'afk',
 async execute(message,args,PREFIX){
 
        var reason = args.join(' ') || 'Not Specified'
        var time = Date.now()
var a =db.set(`afkmember_${message.author.id}&&${message.guild.id}`, message.author.id)
var b =db.set(`afkreason_${message.author.id}&&${message.guild.id}`, reason)
var c =db.set(`afktime_${message.author.id}`, time)
//console.log(a,b,c)
const embed = new MessageEmbed()
.setColor('#0000FF')
.setDescription(`\`Afk set to\` ${reason}`)
.setAuthor(
    message.author.tag,
    message.author.displayAvatarURL({dynamic: true})
)
.setTimestamp()
message.channel.send(embed) 

}
}