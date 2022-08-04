import slugify from "slugify";
import CategoryNews from "../models/categoryNews";
import News from "../models/news";

export const createCategoryNews = async (req, res) => {
  const slug = slugify(req.body.name);
  req.body.slug = slug;
  try {
    const news = await new CategoryNews(req.body).save();
    res.json(news);
  } catch (error) {
    res.status(400).json({
      message: "Không thêm được danh mục",
    });
  }
};
export const listCategoryNews = async (req, res) => {
  try {
    const news = await CategoryNews.find();
    res.json(news);
  } catch (error) {
    res.status(400).json({
      message: "Không hiển thị danh mục",
    });
  }
};
export const readCategoryNews = async (req, res) => {
  try {
    const catenew = await CategoryNews.findOne({ _id: req.params.id }).exec();
    const news = await News.find({ categoryId: catenew._id }).exec();
    res.json({
      catenew,
      news,
    });
  } catch (error) {
    res.status(400).json({
      message: "Không tìm thấy danh mục",
    });
  }
};
export const removeCategoryNews = async (req, res) => {
  try {
    const news = await CategoryNews.findOneAndDelete({ _id: req.params.id }).exec();
    res.json(news);
  } catch (error) {
    res.status(400).json({
      message: "Không xoá đưỢc danh mục",
    });
  }
};
export const updateCategoryNews = async (req, res) => {
  const slug = slugify(req.body.name);
  req.body.slug = slug;
  try {
    const news = await CategoryNews.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
    res.json(news);
  } catch (error) {
    res.status(400).json({
      message: "Không edit được",
    });
  }
};
