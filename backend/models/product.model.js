const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    box1: {
      type: String,
    },
    box2: {
      type: String,
    },
    box3: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
