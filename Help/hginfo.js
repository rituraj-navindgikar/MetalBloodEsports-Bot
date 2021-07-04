const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'hginfo',
    execute(message,args,PREFIX){
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;

        const embed = new MessageEmbed()
        .setTitle(`**Hangman Info**`)
        .setDescription(`
        A word is hidden in game, you will get to know how many letters it is by counting the number of daash \`_ _ _ _ _\`  in it.. 
        letters will be displayed from A - Z. if u react with wrong letter. then the hanging person will slowly be completing..
        You have to guess correct word \`before the the figure of man is completed\`, You lose if u guess the word wrong, 

        Starting the game,
        Use \`${PREFIX}hangman #channel word\`,, mention channel and after it specify a word.(dont teel that word to anyone)
        the game will be \`posted in channel which you metioned\`, And the first person to react on the games starts the game
         (then any other persons reaction wont be counted)

        `)
        .setColor("RANDOM")
        .setFooter(`Bot Created And Developed By MTBxGREAT KING`)
        message.channel.send(embed)
    }
}