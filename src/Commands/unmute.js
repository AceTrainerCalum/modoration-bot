const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "unmute",
	description: "unmutes a user",
	permission: "MANAGE_ROLES",
	async run(message, args, client) {
		
        
        let role = message.guild.roles.cache.find(role => role.name === "mute");
        let member = message.mentions.members.first()
        
        member.roles.remove(role);
        message.channel.send(`unmuted ${member}`)

	}
});
