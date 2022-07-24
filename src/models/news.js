import mongoose, { Schema, ObjectId } from "mongoose";
const NewsSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      minlength: 3,
    },
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
      ref: "CateNews",
    },
  },
  { timestamps: true },
);
export default mongoose.model("News", NewsSchema);
