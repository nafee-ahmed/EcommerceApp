const Category = require("../models/Category");
const Tag = require("../models/Tag");
const { uploadToCloudinary } = require("../utils/cloudinary");
const { addTagWithCategory } = require("./tagController");

module.exports.createCategory = async (req, res, next) => {
  const { type } = req.query;
  const { productName, price, tags, condition, quantity, description, image } =
    req.body;
  const isDelivery = req.body.isDelivery === "Delivery" ? true : false;
  const trimmedTags = tags.map((el) => el.trim());
  try {
    const uploadedImage = await uploadToCloudinary(image);
    const savedCategory = new Category({
      productName,
      price,
      condition,
      quantity,
      description,
      isDelivery,
      tags: trimmedTags,
      type,
      picture: uploadedImage.url,
      pictureId: uploadedImage.publicId,
    });
    savedCategory.owner = req.user;
    await savedCategory.save();
    await addTagWithCategory(trimmedTags, savedCategory);
    res.status(200).json(savedCategory);
  } catch (err) {
    next(err);
  }
};

uniqueArray = (a) =>
  [...new Set(a.map((o) => JSON.stringify(o)))].map((s) => JSON.parse(s));

module.exports.getCategories = async (req, res, next) => {
  const categoryType = req.params.categoryType.toLowerCase();
  const tags = req.query.tags?.split(",");
  let categories = [];

  if (!tags) {
    // if there are no req.query of tags
    categories = await Category.find({ type: categoryType });
  } else {
    let res = [];
    for (let tag of tags) {
      const unfilteredCats = await Tag.find({
        $and: [{ type: categoryType }, { tag }],
      })
        .populate("categories")
        .select("categories");
      let foundCategories = [...unfilteredCats].map((tag) => tag.categories);
      res.push(...foundCategories);
    }
    res = res.flat();
    categories = uniqueArray(res);
  }
  res.status(200).json(categories);
};
