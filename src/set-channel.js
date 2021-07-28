const { Client, Message, MessageEmbed } = require('discord.js')

const Guild = require('../src/schemas/Guild')

module.exports = {
    name: 'set-channel',

    async execute(client, message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return;

        const channel = message.mentions.channels.first()
        if(!channel) return message.reply('Please specify a channel')
       // console.log(message.guild.id)
        Guild.findOne({
            id: message.guild.id,
        }, async(err, data) => {
            
            if(err) throw err;
            if(data) {
                data.Channel = channel.id;
            }else{
                data = new Guild({
                    id: message.guild.id,
                    Current: 0,
                    Channel: channel.id
                })
                
            }
            data.save()
            message.channel.send(`Counting channel set ${channel}`)
        })
    }


}