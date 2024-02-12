import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    addresses: [
      {
        type: Object,
        required: true,
        properties: {
          //   street, city, country
        },
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order', // Reference to Order model
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  });