const Discord = require("discord.js")
const fetch = require("node-fetch");

module.exports = {
    name: 'unlockdown',
     async execute(message, args,PREFIX,client){

        if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("You need `ADMINISTRATOR` perms to use this");
        let role = message.mentions.roles.first()
if(!role) message.reply(`Mention a role, correct usage is\n\`${PREFIX}unlockdown @role #channel(s)`)
  const array_of_channel = message.mentions.channels.array()
if(!args.length) return message.reply(`Atleast mention one channel to lock`)
  let channel1 = array_of_channel[0]
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

      try {
      channel1.updateOverwrite(role, {
        SEND_MESSAGES: true
      });
     if(channel2){ channel2.updateOverwrite(role, {
        SEND_MESSAGES: true
      });
    }
     if(channel3){
      channel3.updateOverwrite(role, {
        SEND_MESSAGES: true
      });
    }
     if(channel4){
      channel4.updateOverwrite(role, {
        SEND_MESSAGES: true
      });
    } if(channel5){
      channel5.updateOverwrite(role, {
        SEND_MESSAGES: true
      });
    } if(channel6){
      channel6.updateOverwrite(role, {
        SEND_MESSAGES: true
      });
    }if(channel7){
      channel7.updateOverwrite(role, {
        SEND_MESSAGES: true
      });
    }
    if(channel8){
        channel8.updateOverwrite(role, {
          SEND_MESSAGES: true
        });
      }
      if(channel9){
        channel9.updateOverwrite(role, {
          SEND_MESSAGES: true
        });
      }
      if(channel10){
        channel10.updateOverwrite(role, {
          SEND_MESSAGES: true
        });
      }
      if(channel11){
        channel11.updateOverwrite(role, {
          SEND_MESSAGES: true
        });
      }
      if(channel12){
        channel12.updateOverwrite(role, {
          SEND_MESSAGES: true
        });
      }
      if(channel13){
        channel13.updateOverwrite(role, {
          SEND_MESSAGES: true
        });
      }
      if(channel14){
        channel14.updateOverwrite(role, {
          SEND_MESSAGES: true
        });
      }
      if(channel15){
        channel15.updateOverwrite(role, {
          SEND_MESSAGES: true
        });
      }

      message.channel.send(`Channel ${array_of_channel} Succesfully Unlocked for role \`${role}\``);
    } catch (err) {
      console.log(err);
      message.reply("Some unexpected error occured. Do I have the permissions to `MANAGE_CHANNELS` ?");
    } 
     
   }}
