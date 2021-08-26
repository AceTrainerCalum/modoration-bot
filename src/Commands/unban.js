const Command = require("../Structures/Command.js");

const Discord = require("discord.js");
const embed_color = require("../Data/embed.json")

module.exports = new Command({
	name: "unban",
	description: "unbans a member",
	permission: "BAN_MEMBERS",
	async run(message, args, client) {

          
        const id = args[1]
        if (!id) message.channel.send("there needs to be an id to unban")
        // message.channel.send("the id is " + id)
        message.guild.members.unban(id);
        message.channel.send(`<@${id}> has been unbaned`)
        // message.channel.send(args[0])
        // message.channel.send(args[1])
 
    }
});

