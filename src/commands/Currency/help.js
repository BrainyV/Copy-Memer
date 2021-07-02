const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "Simple Help Command!",
    execute: async (client, message, args) => {

        const helpEmbedLOL = new Discord.MessageEmbed()
        .setTitle(`Help command for Copy Memer`)
        .setDescription("\*\*Economy Commands\*\* \n \`boi bal\` - Shows your balance and mentioned users balance\n \`boi beg\` - Use this command to beg, only for beggars LOL\n \`boi deposit\` - Deposits your money from your wallet to your bank\n \`boi mystatistic\` - Shows your statistics\n \`boi withdraw\` - Withdraw your money from your bank \n \n \*\*Fun Commands\*\* \n \`boi 8ball\` - Ask 8ball any question\n \`boi avatar\` - Shows your avatar\n \`boi say {your message}\` - Says the message what you would like to!\n \`boi serverinfo\` - Serverinfo Command! \n \n \*\*Moderation Commands\*\* \n \`boi ban\` - Bans the member you would like to (You need native Discord Ban Permission)\n \`boi unban\` - Unbans the member you would like to (You need native Discord Ban Permission)\n \`boi kick\` - Kicks the member you would like to (You need native Discord Kick Permission)")
        .setColor("RANDOM")
        .setFooter("Testing")

        message.channel.send(helpEmbedLOL)
    }
}