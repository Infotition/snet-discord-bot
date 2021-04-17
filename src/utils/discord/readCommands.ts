//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import Discord from 'discord.js';

//* Function imports
import commandBase from '../../commands/commandBase';

//* Command imports

// Misc
import status from '../../commands/misc/status';

// Petron
import format from '../../commands/petron/format';

//* ------------------ CONFIGURATION ------------------ *\\

const commands = [status, format];

//* ------------------- ReadCommands ------------------ *\\

function readCommands(client: Discord.Client) {
  commands.forEach((command) => {
    commandBase(client, command);
  });
}

//* --------------------- EXPORTS --------------------- *\\

export default readCommands;
