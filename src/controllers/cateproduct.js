import slugify from "slugify";
import Cateproduct from "../models/cateproduct";
import Product from "../models/product";

export const list = async (req, res) => {
  try {
    const cateproduct = await Cateproduct.find();
    res.json(cateproduct);
  } catch (error) {
    res.status(400).json({
      message: "Không hiển thị được danh sách",
    });
  }
};

export const read = async (req, res) => {
  try {
    const cateproduct = await Cateproduct.findOne({ _id: req.params.id }).exec();
    const products = await Product.find({ catygoryId: cateproduct._id }).exec();
    res.json({
      products,
      cateproduct,
    });
  } catch (error) {
    res.status(400).json({
      message: "Không hiển thị được danh sách",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const cateproduct = await Cateproduct.findOneAndDelete({ _id: req.params.id }).exec();
    res.json(cateproduct);
  } catch (error) {
    res.status(400).json({
      message: "không xóa đưọc danh mục",
    });
  }
};

export const create = async (req, res) => {
  const slug = slugify(req.body.name);
  req.body.slug = slug;
  try {
    const cateproducts = await new Cateproduct(req.body).save();
    res.json(cateproducts);
  } catch (error) {
    res.status(400).json({
      message: "KHông thêm được danh mục",
    });
  }
};

export const update = async (req, res) => {
  const slug = slugify(req.body.name);
  req.body.slug = slug;
  try {
    const cateproduct = await Cateproduct.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
    res.json(cateproduct);
  } catch (error) {
    res.status(400).json({
      message: "không cập nhật được danh mục",
    });
  }
};
