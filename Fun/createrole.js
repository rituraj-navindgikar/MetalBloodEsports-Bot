module.exports ={
    name: 'createrole',

    async execute(message,args,PREFIX){

        if(!message.member.hasPermission('ADMINISTRATOR'))return;
      
            var existing_roles = new Array()
            if(!args[0]) return message.channel.send("Specify how many roles to create with names role")
           numberOfRoles = args[0]

            for(i=1 ; i <= numberOfRoles ; i++){

            let roleName = `role${i}`;
            let role = message.guild.roles.cache.find(x => x.name === roleName);
 
             
            if (!role) {
                message.guild.roles.create({
                    data: {
                      name: `role${i}`
                    }
                  })
                    .then(console.log(`Created role${i}`))
                } else {
                 existing_roles.push(`role${i}`)
                }
    
            }

     
            if (existing_roles.length == 0){
                return message.channel.send("Done with creating roles")
            }
            else{
                return message.channel.send("Done with creating roles some roles were already created")
            }

        

    }
}