const Product = require("./products.mongo");

async function getAllProducts() {
  return await Product.find().sort({ createdAt: -1 });
}

async function getProductById(_id) {
  return await Product.findById(_id);
}

async function addNewProduct(
  name,
  price,
  description,
  color,
  salePrice,
  quantity
) {
  const newProduct = new Product({
    name,
    description,
    price,
    color,
    salePrice,
    quantity,
  });

  const response = await newProduct.save();
  return response;
}

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
};
