const Discord = require("discord.js");
const tools = require("../../modules/Help.js");

module.exports = {
    // CMD INFORMATION
    name: 'help',
    aliases: ["cmds", "halp", "cmds"],
    description: "Show's the commands of the bot",
    category: "utility",

    // THE ACTUAL CODE
    execute(client, message, args) {
        let prefix = client.config.bot.prefix
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM");

        if (!args.length) {
            embed.setAuthor("Help command!", client.user.displayAvatarURL);
            embed.addField("💸Currency", `${tools.MapCategories(client, "currency")}`);
            embed.addField("🎉Fun", `${tools.MapCategories(client, "fun")}`);
            embed.addField("🛠️Moderation", `${tools.MapCategories(client, "moderation")}`);
            embed.addField("⚙️Utilty", `${tools.MapCategories(client, "utility")}`);
            // Add more fields if there are more categories.

            embed.setFooter(`You can do ${prefix}help [command] to see aditional info!`);
            return message.channel.send(embed);
        } else {
            // Show the command's info.
            const name = args[0].toLowerCase();
            const command = client.commands.get(name) || client.commands.find(c => c.aliases && c.aliases.includes(name));

            if (!command) {
                return message.channel.send("That's not a valid command!");
            }

            embed.setAuthor(`Info about ${name}`, client.user.displayAvatarURL);

            if (command.description) {
                embed.setDescription(command.description) || embed.setDescription("No description available.");
            }

            if (command.category) {
                embed.addField(`Category`, `\`${command.category.toUpperCase()}\``)
            }

            if (command.aliases) {
                embed.addField("Aliases", `\`${command.aliases.join("\`, \`")}\``);
            }

            if (command.usage) {
                embed.addField("Usage", command.usage);
            }

            embed.setFooter("<> means required, [] means optional.");
            return message.channel.send(embed);
        }
    },
};