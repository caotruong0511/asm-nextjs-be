import OrderDetail from "../models/orderDetail";

export const create = async (req, res) => {
  try {
    const orderdetails = await new OrderDetail(req.body).save();
    res.json(orderdetails);
  } catch (error) {
    res.status(400).json({
      message: "không thêm được dữ liệu",
    });
  }
};
export const list = async (req, res) => {
  try {
    const orderdetails = await OrderDetail.find().populate("orderId").populate("productId");
    res.json(orderdetails);
  } catch (error) {
    res.status(400).json({
      message: "không hiển thị được dữ liệu",
    });
  }
};
export const read = async (req, res) => {
  try {
    const orderdetails = await OrderDetail.findOne({ _id: req.params.id });
    res.json(orderdetails);
  } catch (error) {
    res.status(400).json({
      message: "không hiển thị được dữ liệu",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const orderdetails = await OrderDetail.findOneAndDelete({ _id: req.params.id });
    res.json(orderdetails);
  } catch (error) {
    res.status(400).json({
      message: "Không xóa được dữ liệu",
    });
  }
};
export const update = async (req, res) => {
  try {
    const orderdetails = await OrderDetail.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
    res.json(orderdetails);
  } catch (error) {
    res.status(400).json({
      message: "không cập nhật được ",
    });
  }
};
