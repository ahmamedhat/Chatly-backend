import { MutationAddNewMessageArgs } from "../../src/generated/graphql";
import messagesFunctions from "./messages.model";

const messagesResolvers = {
  Query: {
    messages: async () => {
      return await messagesFunctions.getAllMessages();
    },
  },
  Mutation: {
    addNewMessage: async (_, args: MutationAddNewMessageArgs) => {
      return await messagesFunctions.addNewMessage(
        args.chat,
        args.user,
        args.body
      );
    },
  },
};

export default messagesResolvers;
