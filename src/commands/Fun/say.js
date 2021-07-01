module.exports = {
    name: "say",
    description: "Say anything, the bot will repeat it.",
    category: "fun",
    aliases: ["echo", "parrot"],
    execute: (client, message, args) => {
        
        if (!args[0]) return message.reply('how can i say nothing?')
        if (!await client.isBotOwner(message.author.id)) {
            message.delete();
            message.channel.send(args.join(" "))
        } else {
            message.delete();
            message.channel.send(args.join(" ") + "\n-" + message.author.tag + "("+message.author.id + ")")
        }
    }
}
