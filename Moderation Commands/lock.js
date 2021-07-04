const Discord = require("discord.js")
const fetch = require("node-fetch");
module.exports = {
    name: 'lock',
    description: "locks a channel",
   async execute(message, args){

  let channel = message.mentions.channel ||  message.channel 
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You need `Manage Channels` perms to use this");
    try {
      channel.updateOverwrite(channel.guild.roles.everyone, {
        SEND_MESSAGES: false
      });
      message.channel.send(`**Channel ${channel} Succesfully Locked**`);
    } catch (err) {
      console.log(err);
      message.reply("Some unexpected error occured. Do I have the permissions to `MANAGE_CHANNELS` ?");
    } 
     
   }}