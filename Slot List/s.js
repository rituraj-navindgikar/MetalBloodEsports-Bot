const db = require('quick.db')
module.exports = {
name: 's',
async execute(message,args,PREFIX,Booked_Slot){
    if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
    const num = message.content.substring(1,4).trim()

    const description = db.get(`slot_start_${message.guild.id}`)
if(!description)return message.channel.send(`The slot list maker didnt start slot making process, usage is\n\`${PREFIX}slot-start Description of event\` or use \`${PREFIX}slots\` for help`);


 if (Booked_Slot.has(message.author.id)) {return message.reply(`You have already booked once`)} else { 
        if(!args[0]){ return message.channel.send(`Mention your team name to book this slot,
         Correct usage is\n\`${PREFIX}${num} Team Name\``);
        }
        const s = db.get(`${num}_${message.guild.id}`)
        if(s){ return message.channel.send(`This slot is already booked`);
        }else {
        const team_name = args.join(' ')
        db.set(`${num}_${message.guild.id}`, team_name)
        message.channel.send(`Done Registered Your Team on slot ${num} - \`${team_name}\`!`)   
      
       }    
       Booked_Slot.add(message.author.id)
        }


 console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} booked a slot`)

}}