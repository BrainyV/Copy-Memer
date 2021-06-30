module.exports = {
    name: "say",
    description: "A Say command?",
    category: "fun",
    execute: async (client, message, args) => {
        let sayLOL = args.join('')
        message.delete()
        
        message.channel.send(sayLOL)
    }

}