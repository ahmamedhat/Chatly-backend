import { MutationAddNewMessageArgs } from "../../src/generated/graphql";
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
  },
};

export default messageResolvers;
