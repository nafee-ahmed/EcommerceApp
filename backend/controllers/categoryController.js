const Category = require("../models/Category");

module.exports.createCategory = async (req, res, next) => {
  const { type } = req.query;
  const { productName, price, tags, condition, quantity, description } =
    req.body;
  const isDelivery = req.body.isDelivery === "Delivery" ? true : false;
  const trimmedTags = tags.map((el) => el.trim());
  try {
    const savedCategory = new Category({
      productName,
      price,
      tags,
      condition,
      quantity,
      description,
      isDelivery,
      tags: trimmedTags,
      type,
    });
    savedCategory.owner = req.user;
    await savedCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    next(err);
  }
};

// {
//     productName: 'adf',
//     isDelivery: 'No Delivery',
//     price: 34,
//     tags: [ 'sadf', ' fasd' ],
//     condition: 'afdsasfd',
//     quantity: 324,
//     description: 'afds'
//   }
