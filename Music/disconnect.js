module.exports ={
    name:'disconnect',
    description:'Makes bot leave voice channel and stops music',
   async execute(message,args){
    if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
       const voiceChannel = message.member.voice.channel

       if(!voiceChannel) return message.channel.send('Please be in a voice channel');
       await voiceChannel.leave()
       await message.channel.send('Bye! Stopping music :smiling_face_with_tear: & leaving Voice Channel')+
       console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} music dis command used`)


   }}