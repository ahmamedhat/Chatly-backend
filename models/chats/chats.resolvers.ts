const { getAllChats, getChatById, addNewChat } = require("./chats.model");

const chatsResolver = {
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

export default chatsResolver;
