const db = require('quick.db')
module.exports = {
    name:'slot-del',
    execute(message,args,PREFIX){
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
        const description = db.get(`slot_start_${message.guild.id}`)
        if(!description)return message.channel.send(`There is nothing to clear as slot lists are empty\n\`${PREFIX}slot-start Description of event\` or use \`${PREFIX}slots\` for help`);
        

   
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return (`You don't have permission to clear Team name from slot list, As someone who has permission to manage messages!`)
if(!args[0]) return message.channel.send(`Mention a number between 1 and 25 to clear a team name of slot list`);
if(isNaN(args[0]))return message.channel.send(`Error, type a real number, Correct usage is\n\`${PREFIX}slot-del number\``);
if(args[0] > 25)return message.channel.send(`Type a number less than or equal to 25, Correct usage is\n\`${PREFIX}slot-del number\``);
if(args[0] < 1)  return message.channel.send(`Type a number greater than or equal to 1, Correct usage is\n\`${PREFIX}slot-del number\``);

 db.delete(`s${args[0]}_${message.guild.id}`)
 message.channel.send(`Deleted team from slot ${args[0]}`)
 + console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} delete a slot command used`)


    }
}