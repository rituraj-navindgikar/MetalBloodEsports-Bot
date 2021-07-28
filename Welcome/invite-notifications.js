const db = require('quick.db')
const Discord = require('discord.js')

module.exports = client => {
  const invites = {}
  const wait = require('util').promisify(setTimeout);
  client.on('ready', async () => {
    await wait(1000);
     // Load all invites for all guilds and save them to the cache.  
  client.guilds.cache.forEach(g => {
   g.fetchInvites().then(guildInvites => {
     invites[g.id] = guildInvites;
   });
 });
  });

  client.on('guildMemberAdd', async (member) => {
    member.guild.fetchInvites().then(guildInvites => {
      const ei = invites[member.guild.id];
      invites[member.guild.id] = guildInvites;

      const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
      
      const inviter = client.users.cache.get(invite.inviter.id);


      var INVITED_MSG;

      if(!inviter.tag || inviter.tag == undefined){
      INVITED_MSG = '**Joined Through __Vanity__ Link**'} 
      else{
        INVITED_MSG = `**Invited by ${inviter.tag} and he has __${inviter.uses}__ invites**`
      }

      const channelid = '750623569255333918';
      const channel =  client.channels.cache.get(channelid)
      var membercount =  member.guild.memberCount;

       channel.send(`<a:redstar:836509946446610453>**Greetings From MTB Esports**<a:redstar:836509946446610453>
      Welcome to our server ${member.user.tag}
     Now we are a family of __**${membercount}**__ members <a:hype:759725271245914113>\n
     <a:784339639539335188:854064293217566720> Do remember to take self roles from <#797363384797888543>\n
     <a:784339639539335188:854064293217566720> Chat with our Chatbot in <#794552577835794442>\n
     <a:784339639539335188:854064293217566720> Join our giveaways in <#843734479365472266>\n
     <a:784339639539335188:854064293217566720>  Have fun in <#750623573395112007>
     ${INVITED_MSG}`)
      +  message.channel.send('https://images-ext-1.discordapp.net/external/q2E_EVBNiGs7eWcMepNGXhN8Xxa1ylEMai5uiY03pps/https/media.discordapp.net/attachments/712714975352979507/861265762111193128/standard2.gif')


      // member.user.tag invited by inviter.tag he has invite.uses
    });
  });
}