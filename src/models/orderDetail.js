import mongoose, { Schema, ObjectId } from "mongoose";

const orderDetailSchema = new Schema(
  {
    orderId: {
      type: ObjectId,
      ref: "Order",
    },
    productId: {
      type: ObjectId,
      ref: "Product",
    },
    productPrice: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

orderDetailSchema.virtual("product", {
  ref: "Product",
  foreignField: "_id",
  localField: "productId",
  justOne: true,
});

orderDetailSchema.pre(/^find/, function (next) {
  this.populate("product");

  next();
});

export default mongoose.model("Orderdetai", orderDetailSchema);
