const { Util } = require("discord.js");

module.exports = {
    name: 'steal',
    async execute(message,args,PREFIX){
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`You don\'t have permission to steal emojis from other server and upload it here`)
   
        if(!message.guild.me.hasPermission('MANAGE_EMOJIS')) return message.channel.send(`\`i dont have permission to manage emojis,
        Please give me that permission!\n To know what role u should give me type ${PREFIX}setup\``)   
      
        if(!args[0])return message.channel.send(`Atleast mention one emoji to steal from other servers!`)
        for(const rawEmoji of args){
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if(parsedEmoji.id){
                //.gif   .png  extensions type
                const extension = parsedEmoji.animated ? ".gif": ".png"
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
                message.guild.emojis.create(url, parsedEmoji.name)
                .then((emoji) => message.channel.send(`Added: \`${emoji.url}\``)+console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} steal emoji used`)
                )
            }
        }
    }
}