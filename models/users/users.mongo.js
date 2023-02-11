const { model, Schema, default: mongoose } = require("mongoose");

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
    chats: {
      type: mongoose.Schema.Types.Array,
      ref: "Chat",
      default: [],
    },
  },
  { timestamps: true, versionKey: false }
);

const userModel = model("User", userSchema);

module.exports = userModel;
