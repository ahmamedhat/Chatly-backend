const User = require("./users.mongo");

async function getAllUsers() {
  return await Order.find({});
}

async function createNewUser(name, email) {
  const newUser = new User({
    name,
    email,
  });
  return await newUser.save();
}

module.exports = {
  getAllUsers,
  createNewUser,
};
