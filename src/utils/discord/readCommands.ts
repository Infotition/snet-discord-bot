//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import Discord from 'discord.js';

//* Function imports
import commandBase from '../../commands/commandBase';

//* Command imports

// Misc
import status from '../../commands/misc/status';

// Petron
import petronize from '../../commands/petron/petronize';

//* ------------------ CONFIGURATION ------------------ *\\

const commands = [status, petronize];

//* ------------------- ReadCommands ------------------ *\\

function readCommands(client: Discord.Client) {
  commands.forEach((command) => {
    commandBase(client, command);
  });
}

//* --------------------- EXPORTS --------------------- *\\

export default readCommands;
