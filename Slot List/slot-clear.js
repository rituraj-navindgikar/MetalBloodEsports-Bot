const db = require('quick.db')
module.exports = {
    name:'slot-clear',
    async execute(message,args,PREFIX,Booked_Slot){


        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`You don't have permission to manage messages to clear slot list team names, Ask someone with permission \`MANAGE_MESSAGE\` to clear`);

const description = db.get(`slot_start_${message.guild.id}`)
if(!description)return message.channel.send(`There is nothing to clear as slot lists are empty\n\`${PREFIX}slot-start Description of event\` or use \`${PREFIX}slots\` for help`);

db.delete(`s1_${message.guild.id}`)
db.delete(`s2_${message.guild.id}`)
db.delete(`s3_${message.guild.id}`)
db.delete(`s4_${message.guild.id}`)
db.delete(`s5_${message.guild.id}`)
db.delete(`s6_${message.guild.id}`)
db.delete(`s7_${message.guild.id}`)
db.delete(`s8_${message.guild.id}`)
db.delete(`s9_${message.guild.id}`)
db.delete(`s10_${message.guild.id}`)
db.delete(`s11_${message.guild.id}`)
db.delete(`s12_${message.guild.id}`)
db.delete(`s13_${message.guild.id}`)
db.delete(`s14_${message.guild.id}`)
db.delete(`s15_${message.guild.id}`)
db.delete(`s16_${message.guild.id}`)
db.delete(`s17_${message.guild.id}`)
db.delete(`s18_${message.guild.id}`)
db.delete(`s19_${message.guild.id}`)
db.delete(`s20_${message.guild.id}`)
db.delete(`s21_${message.guild.id}`)
db.delete(`s22_${message.guild.id}`)
db.delete(`s23_${message.guild.id}`)
db.delete(`s24_${message.guild.id}`)
db.delete(`s25_${message.guild.id}`)
db.delete(`slot_start_${message.guild.id}`)
Booked_Slot.clear()  
message.channel.send(`Cleared All slot lists things!`)

+ console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} clear all slot command used`)

    }
}