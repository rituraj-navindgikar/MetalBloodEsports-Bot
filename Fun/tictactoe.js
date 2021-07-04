const { tictactoe } = require('reconlx')


module.exports = {
    name: 'tictactoe',
 async execute(client, message, args) {
    if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
    if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
    Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
  

const member = message.mentions.members.first()
if(!member) return message.channel.send(`Specify a member to play with`)
new tictactoe({
    message: message,
    player_two: member,
    
})
console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} tictactoe command used`)

}}