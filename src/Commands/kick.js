const Command = require("../Structures/Command.js");

const Discord = require("discord.js");
const embed_color = require("../Data/embed.json")

module.exports = new Command({
	name: "kick",
	description: "kicks a member",
	permission: "KICK_MEMBERS",
	async run(message, args, client) {

		const embed = new Discord.MessageEmbed();

        let member = message.mentions.members.first()

        let reason = args.join(" ").slice(26);

        if (!member) return message.reply('Please specify a member for me to kick them')

        if (!reason) reason = 'No Reason Given';

        if (!member.kickable) return message.reply('This member is not kickable')

        embed
			.setTitle(`${member} has been kicked`)
			.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }),
			)
			
			.setColor("RANDOM")
			.setThumbnail(message.author.avatarURL({ dynamic: true }))
			.setTimestamp()
			.setImage(
				"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fwww.alphr.com%2Fwp-content%2Fuploads%2F2018%2F12%2Fdiscord-banned.jpg%3Ffit%3D404%252C320%26ssl%3D1&imgrefurl=https%3A%2F%2Fwww.alphr.com%2Fget-around-bypass-ban-discord%2F&tbnid=Lt915_c-XJ3xmM&vet=12ahUKEwjEjPyfk8zyAhULaBoKHeYsDR4QMygNegUIARDeAQ..i&docid=x-Ji63BRTxCbSM&w=404&h=320&q=discord%20ban%20image&ved=2ahUKEwjEjPyfk8zyAhULaBoKHeYsDR4QMygNegUIARDeAQ"
			)
            .setDescription(
                `reason: ** ${reason} **`
            )

		message.channel.send({ embeds: [embed] });

        member.kick(reason)
	}
});

