import mongoose, { Schema } from "mongoose";
const contactSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      minlength: 3,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Contact", contactSchema);
