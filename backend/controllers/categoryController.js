const Category = require("../models/Category");
const { uploadToCloudinary } = require("../utils/cloudinary");

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
    res.status(200).json(savedCategory);
  } catch (err) {
    next(err);
  }
};
