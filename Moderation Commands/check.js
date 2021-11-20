module.exports = {
    name : 'check',
  async execute(message, args, PREFIX){

    if(!args){
        message.channel.send("Invalid")
        return
    }else{
        let roleIds = new Array()
        let validRoles = new Array()

        message.guild.roles.cache.forEach(role => roleIds.push(role.id))
    
        for(var i=0; i<roleIds.length; i++){
           let role = message.guild.roles.cache.find(r=> r.id == roleIds[i])
            if(role.editable && role.permissions.serialize().args){
                validRoles.push(role.name)
            }
        }
        message.channel.send(`Following roles have Permission ${args}\n${validRoles}`)
        }
    }
}
