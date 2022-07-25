import slugify from "slugify";
import News from "../models/news";

export const createNews = async (req, res) => {
  const slug = slugify(req.body.name);
  req.body.slug = slug;
  try {
    const news = await new News(req.body).save();
    res.json(news);
  } catch (error) {
    res.status(400).json({
      message: "Không thêm được news",
    });
  }
};

export const listNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(400).json({
      message: "Không hiển thị",
    });
  }
};

export const readNews = async (req, res) => {
  try {
    const news = await News.findOne({ _id: req.params.id }).exec();
    res.json(news);
  } catch (error) {
    res.status(400).json({
      message: "Không hiển thị",
    });
  }
};

export const removeNews = async (req, res) => {
  try {
    const news = await News.findOneAndDelete({ _id: req.params.id }).exec();
    res.json(news);
  } catch (error) {
    res.status(400).json({
      message: "Không xoá được",
    });
  }
};

export const updateNews = async (req, res) => {
  const slug = slugify(req.body.name);
  req.body.slug = slug;
  try {
    const news = await News.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
    res.json(news);
  } catch (error) {
    res.status(400).json({
      message: "Không edit được",
    });
  }
};
