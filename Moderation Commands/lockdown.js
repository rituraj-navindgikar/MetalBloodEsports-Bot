const Discord = require("discord.js")
const fetch = require("node-fetch");
const ms = require('ms')
module.exports = {
    name: 'lockdown',
     async execute(message, args,PREFIX,client){
const time = ms(args[0])
if(!time)return message.channel.send('Mention time for lockdown')
        if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("You need `ADMINISTRATOR` perms to use this");
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send('Mention a role for which to lock the channels')
          const array_of_channel = message.mentions.channels.array()

  const timeBOI = '60000'
  const timeBOI1 = '70000'
  const timeBOI2 = '80000'
  let channel1 = array_of_channel[0]
  if(!channel1) return message.channel.send('Mention atleast one channel to lockdown for a role')
  let channel2 = array_of_channel[1]
  let channel3 = array_of_channel[2]
  let channel4 = array_of_channel[3]
  let channel5 = array_of_channel[4]
  let channel6 = array_of_channel[5]
  let channel7 = array_of_channel[6]
  let channel8 = array_of_channel[7]
  let channel9 = array_of_channel[8]
  let channel10 = array_of_channel[9]
  let channel11 = array_of_channel[10]
  let channel12 = array_of_channel[11]
  let channel13 = array_of_channel[12]
  let channel14 = array_of_channel[13]
  let channel15 = array_of_channel[14]
  let channel16 = array_of_channel[15]
  let channel17 = array_of_channel[16]
  let channel18 = array_of_channel[17]
  let channel19 = array_of_channel[18]
  let channel20 = array_of_channel[19]
  let channel21 = array_of_channel[20]
  let channel22 = array_of_channel[21]
  let channel23 = array_of_channel[22]
  let channel24 = array_of_channel[23]
  let channel25 = array_of_channel[24]
  let channel26 = array_of_channel[25]
  let channel27 = array_of_channel[26]
  let channel28 = array_of_channel[27]
  let channel29 = array_of_channel[28]
  let channel30 = array_of_channel[29]
  let channel31 = array_of_channel[30]
  if(channel31){message.channel.send(`There are more than 30 channels mentioned. Couldn't lockdown channels ${channel31} and channels mentioned after it`)}
const embed_lock = new Discord.MessageEmbed()
.setDescription(`Locked this channel Until morning 9:00 AM,\nFor any assistance DM <@600290764257493002>, <@555957951236538381> or <@711837685739946004>`)
.setColor("RANDOM")
.setFooter('MTB Management Team')

const embed_unlock = new Discord.MessageEmbed()
.setDescription(`Unlocked this Channel`)
.setColor("RANDOM")
.setFooter('MTB Management Team')

      try {
      channel1.updateOverwrite(role, {
        SEND_MESSAGES: false
      });channel1.send(embed_lock).then(msg => msg.delete({timeout:time}))
     if(channel2){ channel2.updateOverwrite(role, {
        SEND_MESSAGES: false
      }); channel2.send(embed_lock).then(msg => msg.delete({timeout:time}))
    }
     if(channel3){
      channel3.updateOverwrite(role, {
        SEND_MESSAGES: false
      });channel3.send(embed_lock).then(msg => msg.delete({timeout:time}))
    }
     if(channel4){
      channel4.updateOverwrite(role, {
        SEND_MESSAGES: false
      });channel4.send(embed_lock).then(msg => msg.delete({timeout:time}))
    } if(channel5){
      channel5.updateOverwrite(role, {
        SEND_MESSAGES: false
      });channel5.send(embed_lock).then(msg => msg.delete({timeout:time}))
    } if(channel6){
      channel6.updateOverwrite(role, {
        SEND_MESSAGES: false
      });channel6.send(embed_lock).then(msg => msg.delete({timeout:time}))
    }if(channel7){
      channel7.updateOverwrite(role,{
        SEND_MESSAGES: false
      });channel7.send(embed_lock).then(msg => msg.delete({timeout:time}))
    }
    if(channel8){
        channel8.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel8.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel9){
        channel9.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel9.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel10){
        channel10.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel10.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel11){
        channel11.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel11.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel12){
        channel12.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel12.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel13){
        channel13.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel13.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel14){
        channel14.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel14.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel15){
        channel15.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel15.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel16){
        channel16.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel16.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel17){
        channel17.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel17.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel18){
        channel18.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel18.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel19){
        channel19.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel19.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel20){
        channel20.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel20.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel21){
        channel21.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel21.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel22){
        channel22.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel22.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel23){
        channel23.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel23.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel24){
        channel24.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel24.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel25){
        channel25.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel25.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel26){
        channel26.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel26.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel27){
        channel27.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel27.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel28){
        channel28.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel28.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel29){
        channel29.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel29.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
      if(channel30){
        channel30.updateOverwrite(role, {
          SEND_MESSAGES: false
        });channel30.send(embed_lock).then(msg => msg.delete({timeout:time}))
      }
    message.channel.send(`\`Channel\` ${array_of_channel} \`Succesfully Locked For role\` \`${role}\``);
    setTimeout(() => {
      channel1.updateOverwrite(role, {
        SEND_MESSAGES: true
      });channel1.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI}))
     if(channel2){ channel2.updateOverwrite(role, {
        SEND_MESSAGES: true
      });channel2.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI}))
    }
     if(channel3){
      channel3.updateOverwrite(role, {
        SEND_MESSAGES: true
      });channel3.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI}))
    }
     if(channel4){
      channel4.updateOverwrite(role, {
        SEND_MESSAGES: true
      });channel4.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI}))
    } if(channel5){
      channel5.updateOverwrite(role, {
        SEND_MESSAGES: true
      });channel5.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI}))
    } if(channel6){
      channel6.updateOverwrite(role, {
        SEND_MESSAGES: true
      });channel6.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI}))
    }if(channel7){
      channel7.updateOverwrite(role, {
        SEND_MESSAGES: true
      });channel7.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI}))
    }
    if(channel8){
        channel8.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel8.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI}))
      }
      if(channel9){
        channel9.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel9.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI}))
      }
      if(channel10){
        channel10.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel10.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI}))
      }
      if(channel11){
        channel11.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel11.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI1}))
      }
      if(channel12){
        channel12.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel12.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI1}))
      }
      if(channel13){
        channel13.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel13.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI1}))
      }
      if(channel14){
        channel14.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel14.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI1}))
      }
      if(channel15){
        channel15.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel15.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI1}))
      }
      if(channel16){
        channel16.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel16.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI1}))
      }
      if(channel17){
        channel17.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel17.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI1}))
      }
      if(channel18){
        channel18.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel18.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI1}))
      }
      if(channel19){
        channel19.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel19.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI1}))
      }
      if(channel20){
        channel20.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel20.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI1}))
      }
      if(channel21){
        channel21.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel21.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI2}))
      }
      if(channel22){
        channel22.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel22.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI2}))
      }
      if(channel23){
        channel23.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel23.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI2}))
      }
      if(channel24){
        channel24.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel24.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI2}))
      }
      if(channel25){
        channel25.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel25.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI2}))
      }
      if(channel26){
        channel26.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel26.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI2}))
      }
      if(channel27){
        channel27.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel27.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI2}))
      }
      if(channel28){
        channel28.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel28.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI2}))
      }
      if(channel29){
        channel29.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel29.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI2}))
      }
      if(channel30){
        channel30.updateOverwrite(role, {
          SEND_MESSAGES: true
        });channel30.send(embed_unlock).then(msg => msg.delete({timeout:timeBOI2}))
      }
    }, time);
   
  
  } catch (err) {
      console.log(err);
      message.reply(`Some unexpected error occured.`);
    } 
     
   }}
