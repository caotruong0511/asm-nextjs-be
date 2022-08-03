import Order from "../models/order";

export const list = async (req, res) => {
  try {
    const orders = await Order.find().sort("-createdAt");
    res.json(orders);
  } catch (error) {
    res.status(400).json({
      message: "không hiển thị được dữ liệu",
    });
  }
};

export const read = async (req, res) => {
  try {
    const orders = await Order.findOne({ _id: req.params.id });
    res.json(orders);
  } catch (error) {
    res.status(400).json({
      message: "không hiển thị được dữ liệu",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const orders = await Order.findOneAndDelete({ _id: req.params.id });
    res.json(orders);
  } catch (error) {
    res.status(400).json({
      message: "Không xóa được dữ liệu",
    });
  }
};
export const create = async (req, res) => {
  try {
    const orders = await new Order(req.body).save();
    res.json(orders);
  } catch (error) {
    res.status(400).json({
      message: "Không thêm mơi được dữ liệu",
    });
  }
};
export const update = async (req, res) => {
  try {
    const orders = await Order.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.json(orders);
  } catch (error) {
    res.status(400).json({
      message: "Không cập nhật được dữ liệu",
    });
  }
};

export const getByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).sort("-createdAt").exec();

    res.json(orders);
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};
