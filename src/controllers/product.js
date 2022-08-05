import slugify from "slugify";
import Product from "../models/product";
import Comment from "../models/comment";

export const create = async (req, res) => {
  const slug = slugify(req.body.name, {
    lower: true,
    locale: "vi",
  });
  req.body.slug = slug;
  try {
    const products = await new Product(req.body).save();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: "khong them duoc du lieu",
    });
  }
};
export const list = async (req, res) => {
  try {
    const products = await Product.find({}).populate("catygoryId").sort("-createdAt").exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: "khong hien thi",
    });
  }
};
export const read = async (req, res) => {
  try {
    const products = await Product.findOne({ _id: req.params.id }).exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: "khong hien thi",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const products = await Product.findOneAndDelete({ _id: req.params.id }).exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: "khong xoa",
    });
  }
};
export const update = async (req, res) => {
  const slug = slugify(req.body.name, {
    lower: true,
    locale: "vi",
  });
  req.body.slug = slug;
  try {
    const products = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: "khong cap nhat duoc du lieu",
    });
  }
};
export const search = async (req, res) => {
  try {
    const conditions = { name: { $regex: req.query.key, $options: "i" } };
    const products = await Product.find(conditions);
    res.json(products);
  } catch (error) {
    res.status(400).json({
      error: "Không timf được sản phẩm",
    });
  }
};
export const getComment = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id }).exec();
    const comments = await Comment.find({ productId: product._id });
    res.json({
      product,
      comments,
    });
  } catch (error) {
    res.status(400).json({
      message: "Không hiển thị được danh sách",
    });
  }
};

export const getRelated = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug }).exec();
    const productRelated = await Product.find({ slug: { $ne: slug }, catygoryId: product.catygoryId })
      .limit(4)
      .sort("-createdAt")
      .exec();

    res.json(productRelated);
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const getBySlug = async (req, res) => {
  try {
    const products = await Product.findOne({ slug: req.params.slug }).exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: "khong hien thi",
    });
  }
};
