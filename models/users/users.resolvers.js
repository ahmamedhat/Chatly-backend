const { getAllUsers, createNewUser } = require("./users.model");

module.exports = {
  Query: {
    users: async () => {
      return await getAllUsers();
    },
  },
  Mutation: {
    createNewUser: async (_, args) => {
      return await createNewUser(args.name, args.email);
    },
  },
};
