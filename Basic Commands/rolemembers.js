const { execute } = require("../Set Channel/chatbot-channel");

module.exports = {
    name:'rolemembers',
    async execute(message,args,PREFIX){
        let role = message.mentions.roles.first();
        if(!role){ role = message.guild.roles.cache.find(r => r.id == args[0]);
        if(!role) return message.reply(`That role does not exist!, Correct usgae is\n\`${PREFIX}rolemembers @role\``);}
      
        let arr = new Array();
        role.members.forEach(user => {
            arr.push(`\`${user.user.username}\``);
        }); 
           message.channel.send(arr.join(' | ')).catch(err => {
            message.reply('message is more than 2000 charachter');
            console.error(err);
            })
            console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} rolecount command used`)

    }
}