import { model, Schema, default as mongoose } from "mongoose";

const messagesSchema = new Schema(
  {
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const messagesModel = model("Messages", messagesSchema);

export default messagesModel;
