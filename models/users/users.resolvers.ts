import userFunctions from "../users/users.model";

const usersResolvers = {
  Query: {
    users: async () => {
      console.log("here");

      return await userFunctions.getAllUsers();
    },
    user: async (_, args) => {
      return await userFunctions.getUser(args.email);
    },
  },
  Mutation: {
    createNewUser: async (_, args) => {
      return await userFunctions.createNewUser(args.name, args.email);
    },
  },
};

export default usersResolvers;
