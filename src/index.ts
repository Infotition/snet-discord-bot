//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import Discord from 'discord.js';

//* Environments
import dotenv from 'dotenv';

dotenv.config({
  path: `./config/index.env`,
});

//* Function imports
import readCommands from './utils/discord/readCommands';

//* ------------------ CONFIGURATION ------------------ *\\

const client: Discord.Client = new Discord.Client();

//* ------------------ DISCORD EVENTS ----------------- *\\
client.on('ready', () => {
  console.log('discord client is ready');
  readCommands(client);
});

//* -------------------- START BOT -------------------- *\\
client.login(process.env.DISCORD_TOKEN);
