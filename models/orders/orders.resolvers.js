const { getAllOrders, makeNewOrder } = require("./orders.model");

module.exports = {
  Query: {
    orders: async () => {
      return await getAllOrders();
    },
  },
  Mutation: {
    makeNewOrder: async (_, args) => {
      return await makeNewOrder(args.name, args.email, args.total);
    },
  },
};
