const { getAllMessages, addNewMessage } = require("./messages.model");

module.exports = {
  Query: {
    messages: async () => {
      return await getAllMessages();
    },
  },
  Mutation: {
    addNewMessage: async (_, args) => {
      return await addNewMessage(args.chat, args.user, args.body);
    },
  },
};
