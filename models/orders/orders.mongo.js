const { model, Schema } = require("mongoose");

const ordersSchema = new Schema({
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
  date: {
    type: Date,
    default: () => new Date(+new Date()),
  },
});

const orderModel = model("Order", ordersSchema);

module.exports = orderModel;
