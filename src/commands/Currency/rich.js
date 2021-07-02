module.exports = {
    name: "rich",
    category: "currency",
    description: "Check bot leaderboards",
    aliases: ["richest", "leaderboard"],
    execute: async (client, message, args) => {
        message.reply('It\'s hard for me to create a guild leaderboard command when currency is for global.\n -Brainy#0852')
    }
}