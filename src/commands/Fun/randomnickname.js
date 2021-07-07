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

        if (message.member.roles.highest.rawPosition >= message.guild.me.roles.highest.rawPosition) {
            message.inlineReply(`I like to nickname you **"${nicks}"** but I have no permission, sorry.`)
        } else {
            message.member.setNickname(nicks)
            message.reply(`Check you new nickname XD`)
        }

    }
}