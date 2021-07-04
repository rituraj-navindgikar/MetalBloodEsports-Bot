//importing
const { hangman } = require("reconlx");
module.exports = {
    name: 'hangman',
 async execute(client, message, args, PREFIX){
  const textChannel = message.channel
  const permissions = textChannel.permissionsFor(message.client.user);
  if(!permissions.has('SEND_MESSAGES')) return;
     if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
    Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
  const channel = message.mentions.channels.first()
  
    if(!args[0])return message.channel.send(`Mention a channel first and then a word, Correct usage is\n\`${PREFIX}hangman #channel word\` or use \`${PREFIX}hginfo\``)
if(!args[1]) return message.channel.send(`Provide a word, Correct usage is\n\`${PREFIX}hangman channel_id word\` or use \`${PREFIX}hginfo\``)
const hang = new hangman({
    
  message: message,
  word: args.slice(1).join(" "),
  client: client,
  channelID: channel.id
});
hang.start();
 
console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} hangman command used`)

          
}}