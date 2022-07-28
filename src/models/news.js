import mongoose, { Schema, ObjectId } from "mongoose";
const NewsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    desc: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    categoryId: {
      type: ObjectId,
      ref: "CategoryNews",
    },
  },
  { timestamps: true },
);
export default mongoose.model("News", NewsSchema);
