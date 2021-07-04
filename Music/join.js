module.exports ={
    name:'join',
    description:'Makes bot join voice channel in which user is',
   async execute(message,args, PREFIX){
    if(!message.guild.me.hasPermission('SEND_MESSAGES')) return ;
       const voiceChannel = message.member.voice.channel

       if(!voiceChannel) return message.channel.send('Please be in a voice channel, i will join that channel in which u are there !');
       const permissions = voiceChannel.permissionsFor(message.client.user);
       if(!permissions.has('CONNECT')) return message.channel.send(`i dont have permission to Connect to that voice channel, Please give me that role!\n To know what role u should give me type **y!setup**`)   
       if(!permissions.has('SPEAK')) return message.channel.send(`i dont have permission to Speak to that voice channel, Please give me that role!\n To know what role u should give me type **y!setup**`)   
      const YT = '<:zz_yt:775212237601767444>'
       await voiceChannel.join()
       await message.channel.send(`Joined \`\`${voiceChannel.name}\`\` Voice channel!\nWill Play From YouTube\nType \`\`${PREFIX}p\`\` or \`\`${PREFIX}play\`\` To now play music`)+
       console.log(`${message.guild.name},@${message.author.username},#${message.channel.name} music join command used`)

   

}}