import Discord from 'discord.js'

const client = new Discord.Client({
	intents: ['Guilds', 'GuildEmojisAndStickers', 'GuildMessages', 'GuildMessageReactions'],
	presence: {
		status: 'online',
	},
})
