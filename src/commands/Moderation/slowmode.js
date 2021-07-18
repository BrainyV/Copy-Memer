module.exports = {
    name: "slowmode",
    description: "slows the chat a bit",
    category: "moderation",
    execute: async (client, message, args) => {
        if (message.member.hasPermission["MANAGE_CHANNEL"]) return message.reply("you have no permission to do that")
        .then(m => {m.delete({timeout:5000})});
        if (message.guild.me.hasPermission["MANAGE_CHANNEL"]) return message.reply("i have no permission to do that")
        .then(m => {m.delete({timeout:5000})});

        const MOD = message.author.id
        const MOD1 = message.author.tag

        const { channel } = message

        if (args.length < 1) {
          message.reply('Please provide a duration')
          return
        }
    
        let duration = args.shift().toLowerCase()
        if (duration === 'off') {
          duration = 0
        }

        if (duration > 21600){
            message.reply("i can't keep slowmode upto 6 hours, LOL")
            return
        }
    
        if (isNaN(duration)) {
          message.reply(
            'Please provide either a number of seconds or the word "off"'
          )
          return
        }
      
        channel.setRateLimitPerUser(duration, `Requested by ${MOD1}(${MOD})`)
        message.reply(`The slowmode for this channel has been set to ${duration}`)
    }
}
