import { QueryChatsArgs, QueryChatArgs } from "../../src/generated/graphql";
import chatsFunctions from "./chats.model";
const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const chatsResolver = {
  Query: {
    chats: async (_, args: QueryChatsArgs) => {
      return await chatsFunctions.getAllChats(ObjectId(args.userId));
    },
    chat: async (_, args: QueryChatArgs) => {
      return await chatsFunctions.getChat(ObjectId(args.id));
    },
  },
};

export default chatsResolver;
