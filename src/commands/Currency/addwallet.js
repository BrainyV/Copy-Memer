const Discord = require("discord.js");

module.exports = {
    name: "addwallet",
    category: "developers",
    aliases: ["addbal"],
    description: "Adds coins/currencies to the mentioned person's bal/wallet",
    execute: async (client, message, args) => {

            let addMentionLOL = message.mentions.members.first() || message.guild.members.resolve(args[0])
            let coinsLOL = await args[1]

            if (!args[0]) return message.reply('wha... what do you want me to do??')
            if (await client.isBotOwner(message.author.id)) { 
            client.addWallet(addMentionLOL.id, coinsLOL)
    
            message.channel.send("Action Done!! :D")

        } else {

            message.channel.send("are you my developer???")
            
        }
        
    }
}