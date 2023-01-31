const {
  getAllProducts,
  getProductById,
  addNewProduct,
} = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    product: (_, args) => {
      return getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return addNewProduct(
        args.id,
        args.name,
        args.price,
        args.description,
        args.color
      );
    },
  },
};
