const Discord = require('discord.js')
module.exports = {
    name:'top-invites',
    execute(message,args,PREFIX){
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
        if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
        Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
        
        let topinvitenumber = args.slice().join(' ')
if(!args[0]) return message.channel.send(`Mention how many top invites you wish to see, Correct usage is\n\`${PREFIX}top-invites <number>\``)
if(isNaN(args[0]))return message.channel.send("Error, type a real number")
if(args[0] > 46)return message.channel.send("Type a number less than or equal to 45")
if(args[0] < 1)  return message.channel.send("Type a number greater than or equal to 1")

const { guild } = message

    guild.fetchInvites().then((invite) => {
        const inviteCounter = {}

        invite.forEach((invite) => {
            const { uses, inviter } = invite
            const{ username, discriminator } = inviter

            const name = `${username}#${discriminator}`

            inviteCounter[name] = (inviteCounter[name] || 0) + uses
            
        });
        let replyText = 'Invites:'

    const sortedInvites = Object.keys(inviteCounter).sort((a , b) => inviteCounter[b] - inviteCounter[a])
//takes top ``number`` with highest invites
sortedInvites.length = topinvitenumber
        for (const invite of sortedInvites){
            const count = inviteCounter[invite]
            replyText += `\n\`${invite}\` has invited \`${count}\` members!`
        }
        let embedinvites = new Discord.MessageEmbed()
        .setTitle(`Top ${topinvitenumber} Invites Of Server \`${message.guild.name}\``)
        .setColor("RANDOM")
        .setDescription(replyText)
       message.channel.send(embedinvites)
    })
    
    
       console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} top-invites command used`)

    }}