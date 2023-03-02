import chatModel from "../chats/chats.mongo";
import Message from "./messages.mongo";
import { ChatInput, UserInput } from "../../src/generated/graphql";

async function getAllMessages() {
  return await Message.find({});
}

async function addNewMessage(chat: ChatInput, user: UserInput, body: string) {
  return chatModel.findById(chat._id).then(async (chat) => {
    const newMessage = new Message({
      user: {
        _id: user._id,
      },
      chat: { _id: chat?.id },
      body: body,
    });
    const response = await newMessage.save();
    //Todo: fix this array append due to ts error

    // await chat?.messages?.push(newMessage);
    await chat?.save();
    return response;
  });
}

export default { getAllMessages, addNewMessage };
