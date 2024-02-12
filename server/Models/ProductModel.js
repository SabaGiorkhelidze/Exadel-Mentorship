import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: String,
    required: true,
  },
  // nvidia, amd,
  {
    brand: String,
    required: true,
  },
  //CPU GPU RAM etc
  {
    category: String,
    required: true,
  },
  {
    description: String,
    // required: true
  },
  {
    specifications: Object, // needs more detailing
    required: true,
  },
  {
    images: Array,
    required: true,
  },
  {
    price: Number,
    required: true,
  },
  {
    stock: Number,
    required: true,
  },
  {
    isActice: Boolean,
    required: true,
  }
);
