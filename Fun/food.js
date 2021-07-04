const Discord = require("discord.js")
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const request = require("node-superfetch");

module.exports = {
    name: 'food',
    description: "food pic",
   async execute(message, args){
    const textChannel = message.channel
    const permissions = textChannel.permissionsFor(message.client.user);
    if(!permissions.has('SEND_MESSAGES')) return;
       try { console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} food command used`)
 
      const { text } = await request.get("https://thissnackdoesnotexist.com/");
      const $ = cheerio.load(text);
      const img = $('div[class="Absolute-Center"]')
        .first()
        .attr("style")
        .match(/background-image:url\((.+)\);/i);
      const name = $('h1[class="snack-description"]')
        .first()
        .text();
      return message.channel.send(
        name,
        img ? { files: [{ attachment: img[1], name: "ai-food.jpg" }] } : {}
      );
    } catch (err) {
      return message.reply(
        `Oh no, an error occurred: \`${err.message}\`. Try again later!`+
        console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} food command used`)
 
      );
    } 
   
}}