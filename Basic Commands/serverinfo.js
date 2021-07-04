const Discord = require('discord.js')
const dateFormat = require('dateformat')
const date = new Date();
dateFormat(date, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

module.exports = {
    name:'serverinfo',
    execute(message,args,PREFIX){
        const textChannel = message.channel
        const permissions = textChannel.permissionsFor(message.client.user);
        if(!permissions.has('SEND_MESSAGES')) return;
const { guild } = message
const { name, region, memberCount, owner, createdTimestamp, createdAt } = guild
const icon = guild.iconURL()
const voiceChannelCount = guild.channels.cache.filter(channel => channel.type === 'voice').size;
const messageChannelCount = guild.channels.cache.filter(channel => channel.type == 'text').size;
const categoryChannelCount = guild.channels.cache.filter(channel => channel.type == 'category').size;

const botCount = message.guild.members.cache.filter(member => member.user.bot).size;

const millis = new Date().getTime() - message.guild.createdAt.getTime();
const days = millis / 1000 / 60 / 60 / 24;

const serverinfoembed  = new Discord.MessageEmbed()
.setTitle(`Server Info of \`${name}\``)
.setThumbnail(icon)
.setColor("#0000ff")

    .addField('\`Region\`'                  , region || 'unknown'                       ,true)
    .addField('\`Owner\`'                   , owner.user.tag || 'couldnt find'          ,true)
    .addField('\`Members\`'                 , memberCount || 0                          ,true)
    .addField('\`Bots\`'                    , botCount || 0                             ,true)
    .addField('\`Created On\`'              ,`${dateFormat(message.guild.createdAt)}`   ,true)
    .addField('\`Days Since Creation\`'     ,`${days.toFixed(0)}`                       ,true)
    .addField('\`Number of emojis\`'        ,`${guild.emojis.cache.size}`|| 0 `emojis`  ,true)
    .addField('\`Number of Categories\`'    ,  categoryChannelCount || 0                ,true)
    .addField('\`Number of Channels\`'      ,  messageChannelCount || 0                 ,true)
    .addField('\`Number of Voice channels\`', voiceChannelCount || 0                    ,true)
    .addField('\`Number of Roles\`'         ,`${message.guild.roles.cache.size}` || 0   ,true)


message.channel.send(serverinfoembed)+ 
console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} serverinfo command used`)


    }}
