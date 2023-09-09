const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
  discount: {
    type: Number,
    required: true,
  },
  is_discount: {
    type: Number,
    required: true,
  },
  warranty_period: {
    type: Number,
    required: true,
  },
  is_warranty: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  is_exchange: {
    type: Number,
    required: true,
  },
  is_available: {
    type: Number,
    required: true,
  },
  delivery_type: {
    type: String,
    required: true,
  },
  product_details: {
    brand: {
      type: String,
      required: true,
    },
    modal: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    specifications: {
      type: String,
      required: true,
    },
  },
  lauch_date: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  is_cod: {
    type: Number,
    required: true,
  },
  is_return: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
