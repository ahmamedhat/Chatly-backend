const { getAllChats, getChatById, addNewChat } = require("./chats.model");

module.exports = {
  Query: {
    chats: async () => {
      return await getAllChats();
    },
    chat: async (_, args) => {
      return await getChatById(args._id);
    },
  },
  Mutation: {
    addNewChat: async (_, args) => {
      return await addNewChat(args.name, args.users);
    },
  },
};
