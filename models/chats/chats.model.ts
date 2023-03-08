import { ObjectId } from "mongoose";
import Chat from "./chats.mongo";
import User from "../users/users.mongo";
import Message from "../message/message.mongo";

async function getChat(_id: ObjectId) {
  return await Chat.findOne({ _id })
    .populate({ path: "users", model: User })
    .populate({ path: "messages", model: Message })
    .sort({ createdAt: -1 });
}

async function getAllChats(userId: ObjectId) {
  return await Chat.find(
    {
      users: userId,
    },
    { messages: { $slice: -1 } }
  )
    .sort({ updatedAt: -1 })
    .populate({ path: "users", model: User })
    .populate({
      path: "messages",
      populate: [
        {
          path: "to",
        },
        {
          path: "from",
        },
      ],
    });
}

export default { getAllChats, getChat };
