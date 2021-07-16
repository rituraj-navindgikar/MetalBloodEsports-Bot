module.exports = {
    name:'nickname',
    async execute(message,args,PREFIX,client,Discord)
    {
        if (!message.member.hasPermission(`MANAGE_NICKNAMES`)) return message.channel.send("Your topmost role doesnt have permission to change nickname") 
        const member = message.mentions.members.first()
        if(!member) return message.channel.send(`Mention someone\nCorrect usage  ex: \`${PREFIX}nickname @user Simon Dude\``)
        const nickname = args.slice(1).join(` `)
        if (!nickname.length) return message.channel.send(`Correct usage  ex: \`${PREFIX}nickname @user Simon Dude\``)
        if (nickname.length > 32) return message.channel.send("Nickname cannot be longer than 32 characters")

        try { 
            member.setNickname(nickname);
            message.channel.send(`Changed nickname of **${member}** to **${nickname}**`)
        }catch(err){
            message.channel.send("Got some error may be missing perms or the mentioned person might have a higher role than me")
        }
   
    }
}