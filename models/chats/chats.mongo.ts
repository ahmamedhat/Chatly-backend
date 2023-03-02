import { model, Schema, default as mongoose } from "mongoose";

const chatSchema = new Schema(
  {
    users: {
      type: mongoose.Schema.Types.Array,
      ref: "User",
    },
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  { timestamps: true, versionKey: false }
);

const chatModel = model("Chat", chatSchema);

export default chatModel;
