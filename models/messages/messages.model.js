const chatModel = require("../chats/chats.mongo");
const Message = require("./messages.mongo");

async function getAllMessages() {
  return await Message.find({});
}

async function addNewMessage(chat, user, body) {
  return chatModel.findById(chat._id).then(async (chat) => {
    const newMessage = new Message({
      user: {
        _id: user._id,
      },
      chat: { _id: chat.id },
      body: body,
    });
    const response = await newMessage.save();
    await chat.messages.push(newMessage);
    await chat.save();
    return response;
  });
}

module.exports = {
  getAllMessages,
  addNewMessage,
};
