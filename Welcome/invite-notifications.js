const db = require('quick.db')
const Discord = require('discord.js')

module.exports = client => {
  
       const invites = {}
      const getInvitesCounts = async(guild) => {
          return await new Promise(resolve => {
            guild.fetchInvites().then(invites => {
              const inviteCounter = {}
        
              invites.forEach(invite => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter
                const name = `${username}#${discriminator}`
        
                inviteCounter[name] = (inviteCounter[name] || 0) + uses
              })
              resolve(inviteCounter)
            })
          })
        }
        client.guilds.cache.forEach(async (guild) => {
          invites[guild.id] = await getInvitesCounts(guild)
        })
        
     client.on('guildMemberAdd', async member  =>{
                const { guild, id } = member

                let welchannelid = db.get(`welchannel_${member.guild.id}`)
                if(welchannelid === null){return;}  

        const invitesBefore = invites[guild.id]
        const invitesAfter = await getInvitesCounts(guild)
        
        for(const inviter in  invitesAfter){
          if(invitesBefore[inviter] === invitesAfter[inviter] - 1){
           var count = invitesAfter[inviter]
    
           let welcomechannel = client.channels.cache.get(welchannelid)

           let welcomeembed = new Discord.MessageEmbed()
      
         .setColor("RANDOM")
         .setDescription(`Welcome <@${id}>! To ${member.guild.name}, Invited by \`${inviter}\`, And now he has \`${count}\` invites `)
         if(welcomechannel === undefined)return; 
         welcomechannel.send(welcomeembed)
                  invites[guild.id] = invitesAfter
           return;
        }
      }
    
   })
    
    }