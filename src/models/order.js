import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    customerName: {
      type: String,
      require: true,
      minlength: 3,
    },
    address: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    totalPrice: {
      type: Number,
      require: true,
    },
    message: {
      type: String,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

orderSchema.pre(/^find/, function (next) {
  this.populate("orderDetails");

  next();
});

orderSchema.virtual("orderDetails", {
  ref: "Orderdetai",
  foreignField: "orderId",
  localField: "_id",
});

export default mongoose.model("Order", orderSchema);
