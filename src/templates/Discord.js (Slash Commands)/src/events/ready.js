const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	on: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag} | Made with DCLI`);
	},
};