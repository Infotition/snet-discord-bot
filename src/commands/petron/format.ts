//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
import axios from 'axios';
import { MessageEmbed } from 'discord.js';

//* --------------------- Format --------------------- *\\

const format = {
  commands: ['format'],
  expectedArgs: '<theme> \n <code>',
  permissionError: 'You need SEND_MESSAGES permissions to run this command.',
  minArgs: 2,
  maxArgs: null,
  callback: (message: any, _args: Array<string>, text: string) => {
    const split = text.split('```');
    const args = split[0].split(' ');

    const theme = args[0];
    const lang = args[1];
    const title = args[2].replace(/_/g, ' ').replace(/\n/g, '');
    const code = split[1].substring(split[1].indexOf('\n'), split[1].length);
    const data = { theme, code, token: process.env.PETRON_TOKEN };

    axios
      // .get('snetpetron://snetpetron:3000/api/petron/petronize', { data })
      .get('snetpetron://snetpetron:3000/api/petron/petronize', { data })
      .then((response: any) => {
        axios
          .post('https://emkc.org/api/v1/piston/execute', {
            language: lang,
            source: code,
          })
          .then((responsePiston: any) => {
            const replyEmbed = new MessageEmbed()
              .setColor('#ff8800')
              .setTitle(title)
              .setAuthor(message.author.username)
              .setDescription(
                `Die Ausgabe des Programms lautet:\n **${responsePiston.data.output}**`
              )
              .setThumbnail('https://i.imgur.com/i8PukyR.png')
              .setImage(response.data.msg)
              .setTimestamp()
              .setFooter('Powered by Infotition (by Tobias Kärst)');

            message.reply(replyEmbed).then(() => message.delete());
          })
          .catch((error: any) => {
            console.log(error);
          });
      })
      .catch((error: any) => {
        console.log(error);
      });
  },
  permissions: 'SEND_MESSAGES',
};

//* --------------------- EXPORTS --------------------- *\\

export default format;
