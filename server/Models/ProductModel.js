import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
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
  specifications: {
    processor: { type: String },
    memory: { type: String },
    clockSpeed: { type: Number },
    // ... other specs
  },
  images: [String], 
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
}, { collection: "products" }); // Specify collection name