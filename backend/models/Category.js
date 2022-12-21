const mongoose = require("mongoose");
const { createError } = require("../utils/createError");

const categorySchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product name required"],
    trim: true,
  },
  isDelivery: {
    type: Boolean,
    required: [true, "Delivery option required"],
  },
  price: {
    type: Number,
    required: [true, "Price required"],
  },
  tags: {
    type: [String],
    required: [true, "Tags required"],
  },
  condition: {
    type: String,
    required: [true, "Condition required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity required"],
  },
  description: {
    type: String,
    required: [true, "Description required"],
  },
  type: {
    type: String,
    required: [true, "Type required"],
  },
  numberOfLikes: {
    type: Number,
    default: 0,
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

categorySchema.pre("save", function (next) {
  if (this.tags.length < 2 || this.tags.length > 3)
    throw createError(500, "Tags min 2 elements and max 3 elements");
  next();
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
