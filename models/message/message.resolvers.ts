import {
  MutationAddNewMessageArgs,
  MutationMarkAsReadArgs,
} from "../../src/generated/graphql";
import messageFunctions from "./message.model";
const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const messageResolvers = {
  Mutation: {
    addNewMessage: async (_, args: MutationAddNewMessageArgs) => {
      return await messageFunctions.addNewMessage(
        ObjectId(args.from),
        ObjectId(args.to),
        args.body
      );
    },
    markAsRead: async (_, args: MutationMarkAsReadArgs) => {
      return await messageFunctions.markAsRead(ObjectId(args.id));
    },
  },
};

export default messageResolvers;
