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
        const perm_type = args[0]
        console.log(perm_type)

        for(var i=0; i<roleIds.length; i++){
           let role = message.guild.roles.cache.find(r=> r.id == roleIds[i])
            if(role.editable){
                console.log(role.permissions.serialize().perm_type)
                //validRoles.push(role.name)
                console.log(i)
            }
        }
        message.channel.send(`Following roles have Permission ${args[0]}\n${validRoles}`)
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
