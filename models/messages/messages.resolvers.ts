const { getAllMessages, addNewMessage } = require("./messages.model");

const messagesResolvers = {
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

export default messagesResolvers;
