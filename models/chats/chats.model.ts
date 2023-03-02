import Chat from "./chats.mongo";
import User from "../users/users.mongo";

async function getAllChats() {
  return await Chat.find({});
}

async function getChatById(_id) {
  return await Chat.findById(_id);
}

async function addNewChat(name, users) {
  const newChat = new Chat({
    name,
    users,
  });

  const response = await newChat.save();
  users.map((user) => {
    User.findById(user).then(async (user) => {
      //Todo: fix this array append due to ts error

      // await user?.chats?.push(newChat._id);
      await user?.save();
    });
  });

  return response;
}

export default { getAllChats, getChatById, addNewChat };
// module.exports = {
//   getAllChats,
//   getChatById,
//   addNewChat,
// };
