const mongoose = require("mongoose");
const valid = require("validator");
const { ObjectId } = mongoose.Schema.Types;

// Product schema designing
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide product name"],
      trim: true,
      unique: [true, "Please Provide uniqe name"],
      minLength: [3, "Name is too shortt"],
      maxLength: [100, "Name is too long"],
    },
    description: {
      type: String,
      required: true,
    },
    imageURLs: [
      {
        type: String,
        required: true,
        validate: [valid.isURL, "wrong url"],
      },
    ],
    price: {
      type: Number,
      required: true,
      min: [0, "Product price can't be negative"],
    },
    category: {
      type: String,
      required: true,
    },
    /* brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
      },
    }, */
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
