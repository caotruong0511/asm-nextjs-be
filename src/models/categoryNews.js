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
  { timestamps: true },
);

export default mongoose.model("CategoryNews", CategoryNewsSchema);
