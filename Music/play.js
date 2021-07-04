
module.exports ={
     name:'play',
     description:'Joins a voice channel and plays music',
  
    async execute(message,args){
      if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
      if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`\`i dont have permission in this channel to embed links,
      Please give me that role in this channel!\n To know what role u should give me type ${PREFIX}setup\``)   
    
        const ytdl = require('ytdl-core');
        const ytSearch = require('yt-search');

      const Discord = require('discord.js')  
   const voiceChannel = message.member.voice.channel
   if(!voiceChannel) return message.channel.send('Please be in a voice channel')
   
   const permissions = voiceChannel.permissionsFor(message.client.user);
   if(!permissions.has('CONNECT')) return message.channel.send(`i dont have permission to Connect to that voice channel, Please give me that role!\n To know what role u should give me type **y!setup**`)   
   if(!permissions.has('SPEAK')) return message.channel.send(`i dont have permission to Speak to that voice channel, Please give me that role!\n To know what role u should give me type **y!setup**`)   
  if(!args.length) return message.channel.send('Please specify a song name or try mentioning artist/movie/author etc')
 
 

  const connection = await voiceChannel.join()               //
const argsSearch = args.join(' ')
                        //


  const videoFinder = async(query) =>{
 const videoResult = await ytSearch(query);


 return(videoResult.videos.length > 1) ? videoResult.videos[0] : null
                                  }
  const video = await videoFinder(args.join(' '));           
  if(video){
   
    
      const stream = ytdl(video.url, {filter: 'audioonly'});
      connection.play(stream, {sneek: 0, volume: 1})
      .on('finish',()=>{
          voiceChannel.leave();
      });


      const embedplay = new Discord.MessageEmbed()
      .setColor(`#0000FF`)
      .setTitle(video.title)
      .setThumbnail(video.thumbnail)
      .setDescription(`
      **Searching** :mag_right: \`${argsSearch}\`\n**Now Playing** \`${video.title} \`
      `)
      .addField('Duration',`${video.duration}`)
      .addField('Channel',video.author.name)
    .addField('Views',`${video.views}`) 
    .addField('Release', `${video.ago}`)
     .setFooter(`-Song Requested By ${message.author.username}`)
     
     message.channel.send(embedplay)+
     console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} music play command used`)

    }
}}
