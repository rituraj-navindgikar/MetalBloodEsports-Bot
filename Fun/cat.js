const Discord = require("discord.js")
const recentcmd2 = new Set();
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'cat',
    description: "Random Cat Pic",
   async execute(message, args){
    const textChannel = message.channel
    const permissions = textChannel.permissionsFor(message.client.user);
    if(!permissions.has('SEND_MESSAGES')) return;
        if (recentcmd2.has(message.author.id))
      return message.reply(
        `**You are on cooldown you can use this cmd once in 3 seconds. This is to prevent rate limting**`
      );

    
       
    const subReddits = ["cat"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);


 const embed = new Discord.MessageEmbed()
 .setImage(img)
 .setColor("RANDOM")
 .setURL(`http://reddit.com/${random}`)
message.channel.send(embed)

      
        recentcmd2.add(message.author.id);
        setTimeout(() => {
          recentcmd2.delete(message.author.id);
        }, 3000);
      ;
      console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} cat command used`)
    }
}