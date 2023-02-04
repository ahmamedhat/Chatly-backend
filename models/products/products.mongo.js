const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
    salePrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: () => new Date().toISOString(),
    },
  },
  { versionKey: false },
  { timestamps: true }
);

const productModel = model("Product", productSchema);

module.exports = productModel;
