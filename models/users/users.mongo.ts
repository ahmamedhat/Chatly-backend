import { model, Schema, default as mongoose } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
    },
    chats: {
      type: mongoose.Schema.Types.Array,
      ref: "Chat",
      default: [],
    },
  },
  { timestamps: true, versionKey: false }
);

const userModel = model("User", userSchema);

export default userModel;
