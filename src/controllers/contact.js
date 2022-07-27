import Contact from "../models/contact";
export const create = async (req, res) => {
  try {
    const contacts = await new Contact(req.body).save();
    res.json(contacts);
  } catch (error) {
    res.status(400).json({
      message: "khong them duoc du lieu",
    });
  }
};
export const list = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(400).json({
      message: "khong hien thi",
    });
  }
};
export const read = async (req, res) => {
  try {
    const contacts = await Contact.findOne({ _id: req.params.id }).exec();
    res.json(contacts);
  } catch (error) {
    res.status(400).json({
      message: "khong hien thi",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const contacts = await Contact.findOneAndDelete({ _id: req.params.id }).exec();
    res.json(contacts);
  } catch (error) {
    res.status(400).json({
      message: "khong xoa",
    });
  }
};
