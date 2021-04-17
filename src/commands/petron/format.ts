//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
import axios from 'axios';
// import { MessageAttachment } from 'discord.js';

//* --------------------- Format --------------------- *\\

const format = {
  commands: ['format'],
  expectedArgs: '<theme> \n <code>',
  permissionError: 'You need admin permissions to run this command.',
  minArgs: 2,
  maxArgs: null,
  callback: (message: any, _args: Array<string>, text: string) => {
    const split = text.split('```');
    const theme = split[0].replace(/\n/g, '');
    const code = split[1].substring(split[1].indexOf('\n'), split[1].length);
    const data = { theme, code, token: process.env.PETRON_TOKEN };

    axios
      .get('snetpetron://snetpetron:3000/api/petron/petronize', { data })
      .then((response: any) => {
        // const attachment = new MessageAttachment(response.data.msg);
        message.reply(response.data.msg).then(() => message.delete());
      })
      .catch((error: any) => {
        console.log(error);
      });
  },
  permissions: 'ADMINISTRATOR',
};

//* --------------------- EXPORTS --------------------- *\\

export default format;
