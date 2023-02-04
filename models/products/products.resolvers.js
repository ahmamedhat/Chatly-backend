const {
  getAllProducts,
  getProductById,
  addNewProduct,
} = require("./products.model");

module.exports = {
  Query: {
    products: async () => {
      return await getAllProducts();
    },
    product: async (_, args) => {
      return await getProductById(args._id);
    },
  },
  Mutation: {
    addNewProduct: async (_, args) => {
      return await addNewProduct(
        args.name,
        args.price,
        args.description,
        args.color,
        args.salePrice,
        args.quantity
      );
    },
  },
};
