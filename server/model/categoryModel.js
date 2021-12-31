const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: String,
    href: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Categories", categorySchema);
