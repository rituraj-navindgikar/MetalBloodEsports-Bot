const db = require('quick.db')
module.exports = {
    name:'slot-start',
    async execute(message,args,PREFIX){
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`You don't have permission to manage messages, to start registration process of slot list, Ask someone with permission \`MANAGE_MESSAGE\` to start`);
    
if(!args[0])return message.channel.send(`Mention description of slot list like map, game, time, etc, Correct usage is\`${PREFIX}slot-start <number of slots> <description of event>\` and and check slot list by typing\n\`${PREFIX}slot-list\``)

desc = args.join(' ')
db.set(`slot_start_${message.guild.id}`, desc)
message.channel.send(`Done! slot is set.. teammates can register for slots 1 to 25 by typing \`${PREFIX}s1 TEAM NAME\n${PREFIX}s2 TEAM NAME\` similarly for all slots till 25`)
+ console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} start slot list command used`)


}}