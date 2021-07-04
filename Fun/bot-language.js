const db = require('quick.db')
module.exports = {
    name:'bot-language',
    execute(message,args,PREFIX){
        const textChannel = message.channel
        const permissions = textChannel.permissionsFor(message.client.user);
        if(!permissions.has('SEND_MESSAGES')) return;
           if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`You don\'t have permission to setup chatbot, Ask guild admin or someone with manage server role!, usage is \n\`${PREFIX}bot-language <language>\`, note '<>' is not required`)
   
        if(!args[0])return message.channel.send(`Specify name of language`)
const language = args.join(' ')
        db.set(`bot_lan_${message.guild.id}`, language)
        message.channel.send(`Done set language of bot, bot will now talk in \`${language}\``)
        + console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} chatbot-language command used`)

    }
}