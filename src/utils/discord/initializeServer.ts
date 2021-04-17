//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
const firstMessage = require('./firstMessage');
const messages = require('../../data/messages');

//* ----------------- InitializeServer ---------------- *\\

module.exports = (client: any) => {
  Object.values(messages).forEach((val: any) => {
    firstMessage(client, val.id, val.message, val.reactions);
  });
};
