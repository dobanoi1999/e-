const Category = require("../model/categoryModel");
const Product = require("../model/productModel");

const categoryCtl = {
  getAllCategorys: async (req, res) => {
    const categories = await Category.find();

    if (!categories) return res.json({});
    res.json({ data: categories });
  },
  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category.findOne({ name });

      if (category)
        return res.status(500).json({ msg: " This category already exists" });
      const newCategory = new Category({ name });

      await newCategory.save();
      res.json({ msg: "successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.messenge });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const product = await Product.findOne({ category: req.params.id });
      if (product)
        return res
          .status(500)
          .json({ msg: "Please delete all products with a relationship." });
      await Category.findByIdAndDelete(req.params.id);

      res.json({ msg: "successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.messenge });
    }
  },
  updateCategory: async (req, res) => {
    try {
      await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json({ msg: "successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.messenge });
    }
  },
};
module.exports = categoryCtl;
