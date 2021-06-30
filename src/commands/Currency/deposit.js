module.exports = {
    name: "deposit",
    category: "currency",
    description: "Deposit money to your wallet",
    aliases: ["dep"],
    execute: async (client, message, args) => {

        let user = message.author
        let {wallet, bank, bankspace} = await client.getUser(user.id)


        if (!args.length) return message.inlineReply(`How much you want to deposit?`);
        
        let coins;
        let amount = args[0];
        let toDeposit;

        if (amount === `all` || amount === 'max') {
          coins = wallet
          if (coins + bank > bankspace) {
            toDeposit = coins - (coins - ( bankspace - bank))
            coins = toDeposit
          } else {
            coins;
          }

        } else if (amount === `half`) {
          coins = Math.floor(wallet/2)
          if (coins + bank > bankspace) {
            toDeposit = coins - ( coins - (bankspace - bank))
          } else {
            coins;
          }
        } else {
          coins = args[0]
        }

        console.log(coins)
        if (bank >= bankspace) return message.inlineReply('Your bank is full, expand it first.')
        if (isNaN(coins) || !Number.isInteger(coins)) return message.inlineReply(`You need to give vaild number to deposit.`)
        if (coins <= 0) return message.inlineReply(`You can't deposit 0, LOL!`)
        if (wallet < coins) return message.inlineReply(`You can't deposit coins more than in your wallet!`)
        if ((bank + coins) > bankspace) return message.inlineReply(`You only have ${bankspace.toLocaleString()}, you can't deposit that much3.`)

        client.deposit(user.id, coins)

        return message.inlineReply(`You have deposited **${coins.toLocaleString()}** coins to your bank.`)
    }
}