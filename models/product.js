const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  feature: {
    type: Boolean,
    default: true,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  created_At: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: String,
    enum: {
      values: [
        "classmate",
        "natraj",
        "truenote",
        "doms",
        "apsare",
        "sundaram",
        "hindustan pencil",
        "camlin",
      ], // Adjusted enum values for stationary items
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
