import mongoose, { Schema } from "mongoose";
const CategoryNewsSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      minlength: 3,
    },
    slug: {
      type: String,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);
CategoryNewsSchema.pre(/^find/, function (next) {
  this.populate("news");

  next();
});

CategoryNewsSchema.virtual("news", {
  ref: "News",
  foreignField: "catygoryId",
  localField: "_id",
});
export default mongoose.model("CategoryNews", CategoryNewsSchema);
