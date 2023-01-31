const products = [
  {
    id: 0,
    name: "Running shoes",
    price: 759.99,
    description: "The best running sneakers you'll ever get!",
    color: "White",
    reviews: [],
  },
  {
    id: 2,
    name: "Phantom shoes",
    price: 729.99,
    description: "The best casual sneakers you'll ever get!",
    color: "OffWhite",
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find((product) => product.id === +id);
}

function addNewProduct(id, name, price, description, color) {
  const product = {
    id,
    name,
    price,
    description,
    color,
    reviews: [],
  };
  products.push(product);
  return product;
}

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
};
