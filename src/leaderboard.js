const { Client, Message, MessageEmbed } = require('discord.js')
const { ReactionPages } = require('reconlx')
const data = require('../src/schemas/User')

module.exports = {
    name: 'leaderboard',

    async execute(client, message, args){
        data.find({ Guild: message.guild.id }, async(err, data) => {
            if(err) throw err;
            const sort = data.sort((a, b) => b.Counts - a.Counts)

            let i=1;
            if(data.length > 10){
                const chunks = chunkz(sort, 10);
                const arry = [];

                for(chunk of chunks){
                    const chunking = chunk.map((v) => `\`#${i++}\` <@${v.id}> (${v.Counts} counts)`).join('\n\n');

                    arry.push(
                        new MessageEmbed()
                        .setTitle('Leaderboard in '+ message.guild.name).setColor('#ffffff')
                        .setDescription(chunking)
                    )
                }
                ReactionPages(message, arry, true)
            }else{
                const mapping = sort.map((v) => `\`#${i++}\` <@${v.id}> (${v.Counts} counts)`).join('\n\n');
                message.channel.send(
                    new MessageEmbed()
                    .setTitle('Leaderboard in '+ message.guild.name).setColor('#ffffff')
                    .setDescription(mapping)
                )
            }
        })
    }
}
function chunkz(arr, size){
    var array =[];
    for(var i =0; i<arr.length; i+=size){
        array.push(arr.slice(i, i+size))
    }
    return array;
}
