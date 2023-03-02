import {
  MutationCreateNewUserArgs,
  QueryUserArgs,
} from "../../src/generated/graphql";
import userFunctions from "../users/users.model";

const usersResolvers = {
  Query: {
    users: async () => {
      return await userFunctions.getAllUsers();
    },
    user: async (_, args: QueryUserArgs) => {
      return await userFunctions.getUser(args.email);
    },
  },
  Mutation: {
    createNewUser: async (_, args: MutationCreateNewUserArgs) => {
      return await userFunctions.createNewUser(args.name, args.email);
    },
  },
};

export default usersResolvers;
