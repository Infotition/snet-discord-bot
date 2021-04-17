export {};

//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
const addReactions = require('./addReactions');

//* ------------------- FirstMessage ------------------ *\\

module.exports = async (
  client: any,
  id: number,
  text: string,
  reactions = []
) => {
  const channel = await client.channels.fetch(id);

  channel.messages.fetch().then((messages: any) => {
    //* Send a new message to the channel
    if (messages.size === 0) {
      channel.send(text).then((message: any) => {
        addReactions(message, reactions);
      });
      //* Edit the existing message
    } else {
      messages.first().edit(text);
      addReactions(messages.first(), reactions);
    }
  });
};
