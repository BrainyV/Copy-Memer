module.exports = {
    name: "slowmode",
    description: "slows the chat a bit",
    category: "moderation",
    execute: async (client, message, args) => {
        if (message.member.hasPermission["MANAGE_CHANNEL"]) return message.reply("you have no permission to do that")
        .then(m => {m.delete({timeout:5000})});
        if (message.guild.me.hasPermission["MANAGE_CHANNEL"]) return message.reply("i have no permission to do that")
        .then(m => {m.delete({timeout:5000})});

        const slowmodeSEC = await args[1]

        message.channel.setRateLimitPerUser(slowmodeSEC, `Used by ${message.author.tag}(${message.author.id})`);
        message.channel.send(`Set slowmode to ${slowmodeSEC}`)


        if (!args.length) {
            message.channel.send(`Removed slowmode`)
            message.channel.setRateLimitPerUser(0, `Used by ${message.author.tag}(${message.author.id})`);
        }
    }
}