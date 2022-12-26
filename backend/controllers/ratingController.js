const Rating = require("../models/Rating");

module.exports.getUserRating = async (req, res, next) => {
    let rating;
    console.log(req.user._id, req.query.categoryId)
  try {
    const ratingFound = await Rating.findOne({
      $and: [{ owner: req.user._id.toString() }, { category: req.query.categoryId }],
    });
    console.log(ratingFound);
    if (!ratingFound) rating = 0;
    else rating = ratingFound.rating;

    res.status(200).json({ rating });
  } catch (error) {
    next(error);
  }
};

module.exports.createUserRating = async (req, res, next) => {
  const { rating, categoryId } = req.body;
  console.log(req.body);

  try {
    const ratingFound = await Rating.findOne({
      $and: [{ owner: req.user._id }, { category: categoryId }],
    });
    let newRating = undefined;

    if (ratingFound) {
      newRating = await Rating.findByIdAndUpdate(
        ratingFound._id,
        { rating },
        { new: true }
      );
    } else {
      newRating = new Rating({
        rating,
        owner: req.user._id,
        category: categoryId,
      });
      await newRating.save();
    }

    res.status(200).json({ ...newRating._doc });
  } catch (error) {
    next(error);
  }
};
