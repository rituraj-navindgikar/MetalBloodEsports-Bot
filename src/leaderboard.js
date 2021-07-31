const { Client, Message, MessageEmbed } = require('discord.js');
const data = require('../src/schemas/Users');

const pagination = require('discord.js-pagination')

function twochunk(arr, size) {
    var array = [];
    for(var i = 0; i < arr.length; i += size) {
        array.push(arr.slice(i, i+size));
    }
    return array;
}
module.exports = {
    name: 'leaderboard',
    async execute(client, message, args) {

        data.find({ Guild: message.guild.id }, async(err, data) => {
            
            const sort = data.sort((a, b) => b.Counts - a.Counts);
            
            let i = 1;

            if(data.length > 10 ){
                const chunks = twochunk(sort, 10);
                var arry = [];
                
                for(chunk of chunks) {
                    
                    const chunking = chunk.map((v) => `\`#${i++}\` **<@${v.id}>** (${v.Counts} counts)`).join('\n\n');
                    
                    const chunked_array =   new MessageEmbed()
                    .setTitle('Leaderboard in ' + message.guild.name)
                    .setColor('#ffffff')
                    .setDescription(chunking) 
                    .setThumbnail(message.guild.iconURL({dynamic:true}))
                    arry.push(chunked_array)             
                }     
                const emoji = ["⏪", "⏩"]
                const timeout = '30000'   
                pagination(message, arry, emoji, timeout)
                
            } else {
                const mapping = sort.map((v) => `\`#${i++}\` **<@${v.id}>** (${v.Counts} counts)`).join('\n\n')
                message.channel.send(
                    new MessageEmbed()
                        .setTitle('Leaderboard in '+ message.guild.name)
                        .setColor('#ffffff')
                        .setDescription(mapping)
                        .setThumbnail(message.guild.iconURL({ dynamic: true })))
            }
        })
    }
}

