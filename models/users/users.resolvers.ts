import {
  MutationCreateNewUserArgs,
  QueryUserArgs,
} from "../../src/generated/graphql";
import userFunctions from "../users/users.model";

const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const usersResolvers = {
  Query: {
    users: async () => {
      return await userFunctions.getAllUsers();
    },
    user: async (_, args: QueryUserArgs) => {
      return await userFunctions.getUser(ObjectId(args.id));
    },
  },
  Mutation: {
    createNewUser: async (_, args: MutationCreateNewUserArgs) => {
      return await userFunctions.createNewUser(args.name, args.email);
    },
  },
};

export default usersResolvers;
