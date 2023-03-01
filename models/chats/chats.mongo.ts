import { model, Schema, default as mongoose } from "mongoose";

const chatSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    users: {
      type: mongoose.Schema.Types.Array,
      ref: "User",
    },
    messages: {
      type: mongoose.Schema.Types.Array,
      ref: "Message",
    },
  },
  { timestamps: true, versionKey: false }
);

const chatModel = model("Chat", chatSchema);

export default chatModel;
