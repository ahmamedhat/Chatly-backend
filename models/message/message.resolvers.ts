import {
  MutationAddNewMessageArgs,
  QueryConversationArgs,
} from "../../src/generated/graphql";
import messageFunctions from "./message.model";
const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const messageResolvers = {
  Query: {
    conversation: async (_, args: QueryConversationArgs) => {
      return await messageFunctions.getConversation(
        ObjectId(args.from),
        ObjectId(args.to)
      );
    },
  },
  Mutation: {
    addNewMessage: async (_, args: MutationAddNewMessageArgs) => {
      return await messageFunctions.addNewMessage(
        ObjectId(args.from),
        ObjectId(args.to),
        args.body
      );
    },
  },
};

export default messageResolvers;
