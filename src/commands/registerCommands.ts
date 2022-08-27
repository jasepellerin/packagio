import axios, { AxiosError } from 'axios'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const { CLIENT_ID = '', DISCORD_TOKEN = '' } = process.env

export const command = {
	name: 'packagio',
	description: 'Manages package tracking info!',
}

const registerCommands = async () => {
	try {
		console.log('Started refreshing application (/) commands.')

		await axios.post(`https://discord.com/api/v10/applications/${CLIENT_ID}/commands`, command, {
			headers: {
				Authorization: `Bot ${DISCORD_TOKEN}`,
			},
		})

		console.log('Successfully reloaded application (/) commands.')
	} catch (error) {
		console.error((error as AxiosError)?.response?.data)
	}
}

registerCommands()
