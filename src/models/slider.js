import mongoose, { Schema } from "mongoose";
const SliderSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      minlength: 3,
    },
    image: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Slider", SliderSchema);
