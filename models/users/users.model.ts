import User from "./users.mongo";

async function getAllUsers() {
  return await User.find({});
}

async function getUser(email: string) {
  return await User.findOne({ email });
}

async function createNewUser(name: string, email: string) {
  const newUser = new User({
    name,
    email,
  });
  return await newUser.save();
}

export default { getAllUsers, getUser, createNewUser };
