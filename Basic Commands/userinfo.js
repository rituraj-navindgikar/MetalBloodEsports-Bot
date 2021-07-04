module.exports = {
         name:'userinfo',
            description:'displays info abt user',
            execute(message, args, PREFIX){
                const textChannel = message.channel
                const permissions = textChannel.permissionsFor(message.client.user);
                if(!permissions.has('SEND_MESSAGES')) return;
                        if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
                Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
              
           const Discord = require('discord.js')
            const{guild,channel } = message
            const user = message.mentions.users.first() || message.member.user
            const member = guild.members.cache.get(user.id)

        const embeduserinfo = new Discord.MessageEmbed()
            .setAuthor(`User info of ${user.username}`,
            user.displayAvatarURL())
            .setColor('RANDOM')
            .addFields(
                {name: `\`User Tag\``, value: user.tag},
                {name:'\`Is bot?\`',value: user.bot},
                {name: '\`Nickname\`',value: member.nickname || 'None'},
                {name: '\`Joined Server on\`', value: new Date(member.joinedTimestamp).toLocaleDateString()},
                {name:'\`Joined Discord on\`',value:new Date(user.createdTimestamp).toLocaleDateString()},
                {name: '\`Role Count\`',value:member.roles.cache.size - 1}
)

 message.channel.send(embeduserinfo) + console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} userinfo command used`)

        }
    }
