const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        // Optional fields:
        name: { type: String }, // Product name for convenience
        image: { type: String }, // Product image URL for reference
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentDetails: {
      type: Object,
      required: true,
      properties: {
        // Define payment details properties (e.g., transactionId, paymentMethod)
      },
    },
    shippingAddress: {
      type: Object,
      required: true,
      properties: {
        // Define address properties (e.g., street, city, country)
      },
    },
    orderStatus: {
      type: String,
      required: true,
      enum: ['placed', 'shipped', 'delivered', 'canceled'], // Predefined statuses
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });