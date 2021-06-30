module.exports = {
    name: "withdraw",
    category: "currency",
    description: "Withdraw money from your bank",
    aliases: ["with"],
    execute: async (client, message, args) => {

        let user = message.author
        let {wallet, bank, bankspace} = await client.getUser(user.id)


        if (!args.length) return message.inlineReply(`How much you want to withdraw?`);
        
        let coins;
        let amount = args[0];

        if (amount === `all` || amount === 'max') {
          coins = bank
        } else {
          coins = args[0]
        }


        if (isNaN(coins) || !Number.isInteger(coins)) return message.inlineReply(`You need to give vaild number to withdraw.`)
        if (coins <= 0) return message.inlineReply(`You can't withdraw 0, LOL!`)
        if (bank < coins) return message.inlineReply(`You can't withdraw coins more than (${bank.toLocaleString()}) in your bank!`)

        client.withdraw(user.id, coins)

        return message.inlineReply(`You have withdrawn **${coins.toLocaleString()}** coins from your bank.`)
    }
 }