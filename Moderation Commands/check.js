module.exports = {
    name : 'check',
  async execute(message, args, PREFIX){

    if(!args[0]){
        message.channel.send("Invalid")
        return
    }else{
        let roleIds = new Array()
        let validRoles = new Array()
        message.guild.roles.cache.forEach(role => roleIds.push(role.id))

        if(args[0] == 'admin'){
            for(var i=0; i<roleIds.length; i++){
                let role = message.guild.roles.cache.find(r=> r.id == roleIds[i])
                 if(role.editable && role.permissions.serialize().ADMINISTRATOR){
                    validRoles.push(role.name)
                }
            }
            message.channel.send(`Following roles have Permission Admin\n**${validRoles.join('\n')}**`)
        }
        else if(args[0] == 'kick'){
            for(var i=0; i<roleIds.length; i++){
                let role = message.guild.roles.cache.find(r=> r.id == roleIds[i])
                 if(role.editable && role.permissions.serialize().KICK_MEMBERS){
                    validRoles.push(role.name)
                }
            }
            message.channel.send(`Following roles have Permission to Kick\n**${validRoles.join('\n')}**`)
        }
        else if(args[0] == 'ban'){
            for(var i=0; i<roleIds.length; i++){
                let role = message.guild.roles.cache.find(r=> r.id == roleIds[i])
                 if(role.editable && role.permissions.serialize().BAN_MEMBERS){
                    validRoles.push(role.name)
                }
            }
            message.channel.send(`Following roles have Permission to Ban\n**${validRoles.join('\n')}**`)
        }
        else if(args[0] == 'channel'){            
            for(var i=0; i<roleIds.length; i++){
            let role = message.guild.roles.cache.find(r=> r.id == roleIds[i])
             if(role.editable && role.permissions.serialize().MANAGE_CHANNELS){
                validRoles.push(role.name)
            }
        }
        message.channel.send(`Following roles have Permission to Manage Channel\n**${validRoles.join('\n')}**`)}
        else if(args[0] == 'server'){
            for(var i=0; i<roleIds.length; i++){
                let role = message.guild.roles.cache.find(r=> r.id == roleIds[i])
                 if(role.editable && role.permissions.serialize().MANAGE_GUILD){
                    validRoles.push(role.name)
                }
            }
            message.channel.send(`Following roles have Permission to Manage Server\n**${validRoles.join('\n')}**`)
        }
        else if(args[0] == 'role'){
            for(var i=0; i<roleIds.length; i++){
                let role = message.guild.roles.cache.find(r=> r.id == roleIds[i])
                 if(role.editable && role.permissions.serialize().MANAGE_ROLES){
                    validRoles.push(role.name)
                }
            }
            message.channel.send(`Following roles have Permission to Manage roles\n**${validRoles.join('\n')}**`)
        }
        else if(args[0] == 'message'){
            for(var i=0; i<roleIds.length; i++){
                let role = message.guild.roles.cache.find(r=> r.id == roleIds[i])
                 if(role.editable && role.permissions.serialize().MANAGE_MESSAGES){
                    validRoles.push(role.name)
                }
            }
            message.channel.send(`Following roles have Permission to Manage Messages\n**${validRoles.join('\n')}**`)
        }
        else{return message.channel.send("Wrong input correct input should be any one from below\n**admin**\n**kick**\n**ban**\n**channel**\n**server**\n**role**\n**message**")}
        
        return
        }
    }
}
/*
  ADMINISTRATOR: false,
  KICK_MEMBERS: false,
  BAN_MEMBERS: false,
  MANAGE_CHANNELS: false,
  MANAGE_GUILD: false,
  MANAGE_MESSAGES: false,
  MANAGE_ROLES: false,
  */
