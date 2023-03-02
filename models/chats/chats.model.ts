import { ObjectId } from "mongoose";
import Chat from "./chats.mongo";

async function getAllChats(userId: ObjectId) {
  return await Chat.find({
    users: userId,
  });
}

export default { getAllChats };
