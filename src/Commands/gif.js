const fetch = require("node-fetch");
const { Console } = require("console");
const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "gif",
	description: "sends a gif",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        

		let msg = args.join(" ").slice(4);
		if (!msg) msg = 'pokemon';
		
  		let url = `https://api.tenor.com/v1/search?q=pokemon%20${msg}&key=OLGUX47ERMRB&contentfilter=high`;
  		let response = await fetch(url);
  		let json = await response.json();
  		const index = Math.floor(Math.random() * json.results.length);
  		message.channel.send(json.results[index].url);
 	 	message.channel.send("GIF from Tenor: " + msg);

	}
});
