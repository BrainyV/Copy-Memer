const Discord = require("discord.js");

module.exports = {
    name: "removewallet",
    category: "developers",
    aliases: ["removebal"],
    description: "Removes coins/currencies from the mentioned person's wallet/bal",
    execute: async (client, message, args) => {

            let removeMentionLOL = message.mentions.members.first() || message.guild.members.resolve(args[0])
            let coinsLOL = await args[1]

            if (!args[0]) return message.reply('wha... what do you want me to do??')
            if (await client.isBotOwner(message.author.id)) { 
            client.subtractWallet(removeMentionLOL.id, coinsLOL)
    
            message.channel.send("Action Done!! :D")

        } else {

            message.channel.send("are you my developer???")
            
        }
        
    }
}