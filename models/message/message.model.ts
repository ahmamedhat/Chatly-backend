import Message from "./message.mongo";
import Chat from "../chats/chats.mongo";
import { ObjectId } from "mongoose";

async function addNewMessage(from: ObjectId, to: ObjectId, body: string) {
  const newMessage = new Message({
    body,
    from,
    to,
  });

  await newMessage.save();

  const query = {
    $or: [{ users: [to, from] }, { users: [from, to] }],
  };
  const update = {
    $set: { lastMessage: newMessage._id, users: [from, to] },
    $addToSet: { messages: newMessage._id },
  };
  const options = {
    upsert: true,
  };
  await Chat.updateOne(query, update, options);

  return (await newMessage.populate("to")).populate("from");
}

async function markAsRead(id: ObjectId) {
  return await Message.findByIdAndUpdate(id, { read: true });
}

export default { addNewMessage, markAsRead };
