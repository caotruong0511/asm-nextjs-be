import mongoose, { Schema, ObjectId } from "mongoose";
const commentSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      ref: "userModel",
    },
    productId: {
      type: ObjectId,
      ref: "product",
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Comment", commentSchema);
