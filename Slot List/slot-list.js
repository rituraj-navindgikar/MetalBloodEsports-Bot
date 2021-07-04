const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name:'slot-list',
    async execute(message,args,PREFIX){
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`You don't have permission to manage messages, to display slot list team names, Ask someone with permission \`MANAGE_MESSAGE\` to display slot list`);
   
const no_of_slots = db.get(`no.ofslot_${message.guild.id}`)
const description = db.get(`slot_start_${message.guild.id}`)
if(!description)return message.channel.send(`Before typing this command type\n\`${PREFIX}slot-start Description of event\``);


const s1  =  db.get(`s1_${message.guild.id}`) || `Empty`
const s2  =  db.get(`s2_${message.guild.id}`) || `Empty`
const s3  =  db.get(`s3_${message.guild.id}`) || `Empty`
const s4  =  db.get(`s4_${message.guild.id}`) || `Empty`
const s5  =  db.get(`s5_${message.guild.id}`) || `Empty`
const s6  =  db.get(`s6_${message.guild.id}`) || `Empty`
const s7  =  db.get(`s7_${message.guild.id}`) || `Empty`
const s8  =  db.get(`s8_${message.guild.id}`) || `Empty`
const s9  =  db.get(`s9_${message.guild.id}`) || `Empty`
const s10 = db.get(`s10_${message.guild.id}`) || `Empty`
const s11 = db.get(`s11_${message.guild.id}`) || `Empty`
const s12 = db.get(`s12_${message.guild.id}`) || `Empty`
const s13 = db.get(`s13_${message.guild.id}`) || `Empty`
const s14 = db.get(`s14_${message.guild.id}`) || `Empty`
const s15 = db.get(`s15_${message.guild.id}`) || `Empty`
const s16 = db.get(`s16_${message.guild.id}`) || `Empty`
const s17 = db.get(`s17_${message.guild.id}`) || `Empty`
const s18 = db.get(`s18_${message.guild.id}`) || `Empty`
const s19 = db.get(`s19_${message.guild.id}`) || `Empty`
const s20 = db.get(`s20_${message.guild.id}`) || `Empty`
const s21 = db.get(`s21_${message.guild.id}`) || `Empty`
const s22 = db.get(`s22_${message.guild.id}`) || `Empty`
const s23 = db.get(`s23_${message.guild.id}`) || `Empty`
const s24 = db.get(`s24_${message.guild.id}`) || `Empty`
const s25 = db.get(`s25_${message.guild.id}`) || `Empty`
// const s25 = db.get(`s25_${message.guild.id}`) || `Empty`
// const s26 = db.get(`s25_${message.guild.id}`) || `Empty`
// const s27 = db.get(`s25_${message.guild.id}`) || `Empty`
// const s28 = db.get(`s25_${message.guild.id}`) || `Empty`
// const s29 = db.get(`s25_${message.guild.id}`) || `Empty`
// const s30 = db.get(`s25_${message.guild.id}`) || `Empty`


const embed = new Discord.MessageEmbed()
.setTitle(description)
.setColor("RANDOM")
.setDescription(`
\`01•|${s1}\n02•|${s2}\n03•|${s3}\n04•|${s4}\n05•|${s5}\n06•|${s6}\n07•|${s7}\n08•|${s8}\n09•|${s9}\n10•|${s10}\n11•|${s11}\n12•|${s12}\n13•|${s13}\n14•|${s14}\n15•|${s15}\n16•|${s16}\n17•|${s17}\n18•|${s18}\n19•|${s19}\n20•|${s20}\n21•|${s21}\n22•|${s22}\n23•|${s23}\n24•|${s24}\n25•|${s25}\n\`
`)
.setFooter(`MTB Management Team`)

message.channel.send(embed)
+ console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} slot-list command used`)

}}