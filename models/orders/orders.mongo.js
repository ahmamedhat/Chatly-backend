const { model, Schema } = require("mongoose");

const ordersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const orderModel = model("Order", ordersSchema);

module.exports = orderModel;
