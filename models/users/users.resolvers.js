const { getAllUsers, createNewUser, getUser } = require("./users.model");

module.exports = {
  Query: {
    users: async () => {
      return await getAllUsers();
    },
    user: async (_, args) => {
      return await getUser(args.email);
    },
  },
  Mutation: {
    createNewUser: async (_, args) => {
      return await createNewUser(args.name, args.email);
    },
  },
};
