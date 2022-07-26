import mongoose, { Schema, ObjectId } from "mongoose";
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      minlength: 3,
    },
    image: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    catygoryId: {
      type: ObjectId,
      ref: "categoty",
    },
    slug: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Product", ProductSchema);
