import Message from "./message.mongo";
import User from "../users/users.mongo";
import Chat from "../chats/chats.mongo";
import { ObjectId } from "mongoose";

async function getConversation(from: ObjectId, to: ObjectId) {
  return await Message.find({
    $or: [
      { from, to },
      { from: to, to: from },
    ],
  })
    .populate({ path: "to", model: User })
    .populate({ path: "from", model: User })
    .sort({ createdAt: -1 });
}

async function addNewMessage(from: ObjectId, to: ObjectId, body: string) {
  const newMessage = new Message({
    body,
    from,
    to,
  });

  await newMessage.save();

  // To get all chats the user is the sender or reciever in.
  const query = {
    $or: [{ users: [to, from] }, { users: [from, to] }],
  };
  // Then I update or insert if the chat doesn't exist
  const update = { $set: { lastMessage: newMessage._id, users: [from, to] } };
  const options = { upsert: true };
  await Chat.updateOne(query, update, options);

  return (await newMessage.populate("to")).populate("from");
}

export default { getConversation, addNewMessage };
