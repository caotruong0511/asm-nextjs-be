import Comment from "../models/comment";
import Product from "../models/product";

export const list = async (req, res) => {
  try {
    const comment = await Comment.find();
    res.json(comment);
  } catch (error) {
    res.status(400).json({
      message: "Không hiển thị được ",
    });
  }
};
export const read = async (req, res) => {
  try {
    const comment = await Comment.findOne({ _id: req.params.id });
    res.json(comment);
  } catch (error) {
    res.status(400).json({
      message: "khong list duoc danh sach",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const comment = await Comment.findOneAndDelete({ _id: req.params.id }).exec();
    res.json(comment);
  } catch (error) {
    res.status(400).json({
      message: "không xóa đưọc ",
    });
  }
};
export const create = async (req, res) => {
  try {
    const comment = await new Comment(req.body).save();
    res.json(comment);
  } catch (error) {
    res.status(400).json({
      message: "KHông thêm được",
    });
  }
};
export const update = async (req, res) => {
  try {
    const comment = await Comment.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
    res.json(comment);
  } catch (error) {
    res.status(400).json({
      message: "không cập nhật được ",
    });
  }
};

export const getByProduct = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug }).exec();
    const comments = await Comment.find({ productId: product._id }).sort("-createdAt").exec();

    res.json(comments);
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};
