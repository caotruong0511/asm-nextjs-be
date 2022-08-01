import mongoose, { Schema } from "mongoose";
const cateproductSchema = new Schema(
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
    slug: {
      type: String,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

cateproductSchema.pre(/^find/, function (next) {
  this.populate("products");

  next();
});

cateproductSchema.virtual("products", {
  ref: "Product",
  foreignField: "catygoryId",
  localField: "_id",
});

export default mongoose.model("Cateproduct", cateproductSchema);
