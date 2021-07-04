const Discord = require("discord.js")
const fetch = require("node-fetch");

module.exports = {
    name: 'dog',
    description: "dog pic",
   async execute(message, args){
    const textChannel = message.channel
  const permissions = textChannel.permissionsFor(message.client.user);
  if(!permissions.has('SEND_MESSAGES')) return;
let msg200 = await message.channel.send(
      "Fetching a image, please wait a second!"
    );
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(json => {
        let embed = new Discord.MessageEmbed()
          .setTitle(`Here is a dog`)
          .setImage(json.message)
          .setFooter(`Awwww`);
        msg200.edit(embed)+
        console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} dog command used`)

      })}}