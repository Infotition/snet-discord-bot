//* ------------------- AddReactions ------------------ *\\

function addReactions(message: any, reactions: Array<string>) {
  message.react(reactions[0]);
  reactions.shift();
  if (reactions.length > 0) {
    setTimeout(() => addReactions(message, reactions), 750);
  }
}

module.exports = addReactions;
