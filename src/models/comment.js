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
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

commentSchema.pre(/^find/, function (next) {
  this.populate("user");

  next();
});

commentSchema.virtual("user", {
  ref: "User",
  foreignField: "_id",
  localField: "userId",
  justOne: true,
});

export default mongoose.model("Comment", commentSchema);
