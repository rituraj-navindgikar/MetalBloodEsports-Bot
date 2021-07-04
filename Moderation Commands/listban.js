const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'listban',
async execute(message,args){
const Discord = require(`discord.js`);
if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   

message.guild.fetchBans()
.then(banned => {
    let list = banned.map(ban => ban.user.tag).join('\n');

    if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;

    const bannedlistembed = new Discord.MessageEmbed()
.setTitle(`**${banned.size} users are banned In this server:**`)
.setDescription(`${list}`)
.setColor(`#00ff00`)
    message.channel.send(bannedlistembed);
})
  console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} listban command used`)
}}