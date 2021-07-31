module.exports = {
    name: 'devices',
    async execute(message, args, PREFIX , client, Discord){

        const user = message.mentions.users.first() || message.author

        const devices = user.presence?.clientStatus || {}

        const description = () => {
            if(devices > 1) {
                const entries = Object.entries(devices).map((value) => value[0])
                return `Device: ${entries}`;
            }
            else {
                const entries = Object.entries(devices).map((value, index) => `${index+1}) ${value[0]}`).join("\n")
                return `Devices: \n${entries}`

            }
        }
        const embed  = new Discord.MessageEmbed()
        .setAuthor(user.tag, user.displayAvatarURL())
        .setDescription(description())

        message.channel.send(embed)
    }
}