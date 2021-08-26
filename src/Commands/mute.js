const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "mute",
	description: "mutes a user",
	permission: "MANAGE_ROLES",
	async run(message, args, client) {
		
        
        let role = message.guild.roles.cache.find(role => role.name === "mute");
        let member = message.mentions.members.first()
        
        member.roles.add(role);
        message.channel.send(`muted ${member}`)

	}
});
