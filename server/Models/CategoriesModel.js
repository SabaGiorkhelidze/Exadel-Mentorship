import mongoose from "mongoose";

const CategorySchema = mongoose.Schema(
  // ( "CPU", "GPU", "RAM", "Motherboard", "Storage", "Case", "Cooling"))

  {
    name: String,
    required: true,
  },
  {
    isActive: Boolean,
  }
);
