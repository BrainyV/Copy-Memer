const Discord = require("discord.js");

module.exports = {
    name: 'randomnickname',
    aliases: ['nickme', 'randomnick'],
    description: 'Gives you a randomized nickname',
    category: "fun",
    execute: async (client, message, args) => {
        //LMAO
        if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
        const nicknamesXD = [
            "Server Owner",
            "Copy Memer BETA",
            "Ping me to get banned",
            "Bommer",
            "Gamer",
            "Godfather",
            "Mafia",
            "Probably who shouldn't be named",
            "Definitely justme's Alt",
            "Real Brainy",
        ]

        let nicks = nicknamesXD[Math.floor(Math.random() * nicknamesXD.length)]
        //message.reply(`Hahaha check your nick once?`)
        message.member.setNickname(nicks)

        if (Discord.DiscordAPIError) {
            message.channel.send("I had an error")
        }

    }
}