const User = require("./users.mongo");

async function getAllUsers() {
  return await User.find({});
}

async function getUser(email) {
  return await User.findOne({ email });
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
  getUser,
};
