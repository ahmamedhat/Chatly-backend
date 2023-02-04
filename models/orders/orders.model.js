const Order = require("./orders.mongo");

async function getAllOrders() {
  return await Order.find({});
}

async function makeNewOrder(name, email, total) {
  const newOrder = new Order({
    name,
    email,
    total,
  });
  return await newOrder.save();
}

module.exports = {
  getAllOrders,
  makeNewOrder,
};
