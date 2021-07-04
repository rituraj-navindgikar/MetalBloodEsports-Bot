
const Minesweeper = require('discord.js-minesweeper')

module.exports = {
    
    name: 'minesweeper',
 async execute(client, message, args) {
    const textChannel = message.channel
  const permissions = textChannel.permissionsFor(message.client.user);
  if(!permissions.has('SEND_MESSAGES')) return;
     const minesweeper = new Minesweeper({
    returnType: 'emoji'
    });

    var mines = minesweeper.start()
    message.channel.send(`${message.author} started Minesweeper game!`)+
    message.channel.send(mines)+
    console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} minesweeper command used`)


    
 


}}