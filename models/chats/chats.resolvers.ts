import {
  MutationAddNewChatArgs,
  QueryChatArgs,
} from "../../src/generated/graphql";
import chatsFunctions from "./chats.model";

const chatsResolver = {
  Query: {
    chats: async () => {
      return await chatsFunctions.getAllChats();
    },
    chat: async (_, args: QueryChatArgs) => {
      return await chatsFunctions.getChatById(args._id);
    },
  },
  Mutation: {
    addNewChat: async (_, args: MutationAddNewChatArgs) => {
      return await chatsFunctions.addNewChat(args.name, args.users);
    },
  },
};

export default chatsResolver;
