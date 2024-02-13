const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // unique: true,
    },
    brand: {
      type: String,
      // required: true
    },
    category: {
      type: String,
      // required: true,
    },
    description: String,
    specifications: String,
    // {
    //   processor: { type: String },
    //   memory: { type: String },
    //   clockSpeed: { type: Number },
    //   // ... other specs
    // },
    // images: [String],
    price: Number,
    // salePrice: Number, // Optional for discounted prices
    stock: Number,
    isActive: Boolean,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "products" }
); // Specify collection name

const Product = mongoose.model("Product", ProductSchema);
module.exports = { Product };

// const product = "product";

// module.exports = { product };
