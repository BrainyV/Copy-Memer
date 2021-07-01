const Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "Serverinfo Command??",
    category: "fun",
    aliases: ["si"],
    execute: async (client, message, args) => {
        const { guild } = message

        const { name, region, memberCount, owner, afkTimeout } = guild

        const serverinfoGUILDICON = guild.iconURL()
        const serverinfoEMBED = new Discord.MessageEmbed()
        .setTitle(`Serverinfo for ${message.guild.name}`)
        .setThumbnail(serverinfoGUILDICON)
        .setColor('#ff0000')
        .addFields(
            {
                name: 'Name:',
                value: name,
                inline: true,
            },
            {
                name: 'Region',
                value: region,
                inline: false,
            },
            {
                name: 'Member Count',
                value: memberCount,
                inline: false,
            },
            {
                name: 'Owner',
                value: owner.user.tag,
                inline: true,
            },
            {
                name: 'AFK Timeout',
                value: afkTimeout / 60,
                inline: false,
            }
                 
        )

      message.channel.send(serverinfoEMBED)
  
    }
}