import Discord, { ActivityType } from 'discord.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { command } from './commands/registerCommands'

dotenv.config({ path: '.env' })

const client = new Discord.Client({
	intents: [
		'Guilds',
		'GuildEmojisAndStickers',
		'GuildMessages',
		'GuildMessageReactions',
		'DirectMessages',
	],
	presence: {
		status: 'online',
		activities: [{ name: ' for packages', type: ActivityType.Watching }],
	},
})

mongoose.connect(process.env.MONGO_CONNECTION_STRING || '').catch((err: string) => {
	console.error(err)
})

client.once('ready', async () => {
	console.log('Packagio is running...')
})

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand() || interaction.commandName !== command.name) return

	interaction.reply('Hello!')
})

client.login(process.env.DISCORD_TOKEN)
