
const Discord = require('discord.js')
module.exports = {
    name: 'warn',
    async execute(message,args,PREFIX,client){
        if(!message.member.hasPermission('MANAGE_EMOJIS')) return

        if(!args[0]) return message.channel.send("Mention a role or mention multiple users")

try{
        if(message.mentions.roles.first()){

            const context = args.slice(1).join(" ")
            if(!context) return message.channel.send('Type a message to send')
      
            const contextresult = new Discord.MessageEmbed()
            .setTitle(`Your role **${role.name}** got a Warn from MTB Team`)
            .setColor('#ff0000')
            .setDescription(context)
            .setTimestamp()
            .setFooter(`| Mod - ${message.author}`)
      
            const role = message.mentions.roles.first() 
            if(!role) return message.channel.send('Mention a role')
      
            let membersArray = message.guild.roles.cache.get(role.id).members.array();
            console.log(membersArray.length + ' have the mentioned role.')
      
            if(membersArray.length > 410) return message.channel.send("Mentioned role has more than 400 members");
            message.channel.send(`${membersArray.length} have that role, After Warning all i will send message again`)
      
      
            const total_with_role = membersArray.length
      
            let interval = setInterval(() => {
               
                let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
               let member_id4 = member.replace('<' , '');
               let member_id3 = member_id4.replace('@' , '');
               let member_id2 = member_id3.replace('!' , '');
               let member_id = member_id2.replace('>', '');
              
                 client.users.fetch(member_id, false).then((user) =>{
                    user.send(contextresult).catch(() => message.channel.send('member <@' +member_id+'> not received'));
                })
                console.log(member_id + ' sending')
                if(membersArray.length == 0){ 
                    clearInterval(interval);
                    message.channel.send(`Gave your Warning successfully:\` ${total_with_role}`)
                }
            }, 2000);
        }

        else if(message.mentions.users.first()){
            var member_Array = message.mentions.users.array()

            var msg = args.join(' ')
            var member_n_context_array  = msg.split(" ")


            let string2 = member_Array.join(' ')
            let string1 = member_n_context_array.join(' ')

        function getDifference(a, b)
                       {
                   var i = 0;
                var j = 0;
                var result = "";

                  while (j < b.length)
                {
                    if (a[i] != b[j] || i == a.length)
                       result += b[j];
                      else
                            i++;
                          j++;
                            }
                        return result;
                        }

            var content_with_exlacmation = getDifference(string2, string1)
            var content = content_with_exlacmation.replace(/!/g, '')
            //message.channel.send(` Sending messages to mentioned people, After Warning all i will send message again`)
            // below correct
            message.channel.send(`Gave your Warning successfully`)
            const contentresult = new Discord.MessageEmbed()
            .setTitle(`You got a Warn from MTB Team`)
            .setColor("#ff0000")
            .setDescription(content)
            .setTimestamp()
            .setFooter(`Mod - ${message.author.username}`)
            let interv = setInterval(() => {

                let member = member_Array.splice(Math.floor(Math.random() * member_Array.length), 1).toString();
                let member_id4 = member.replace('<' , '');
                let member_id3 = member_id4.replace('@' , '');
                let member_id2 = member_id3.replace('!' , '');
                let member_id = member_id2.replace('>', '');
               
                  client.users.fetch(member_id, false).then((user) =>{
                     user.send(contentresult).catch(() => message.channel.send('member <@' +member_id+'> not received'));
                 })
                 console.log(member_id + ' sending')
                    if(member_Array.length == 0){
                        clearInterval(interv)
                    }
                }, 10000);
                
                
            }
        }

    catch(err){
        message.channel.send("Couldnt find that role or person")
    }
    }
}
