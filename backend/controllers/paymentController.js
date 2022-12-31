module.exports.getPublishableKey = async (req, res, next) => {
  res.status(200).json(process.env.STRIPE_PUBLISHABLE_KEY);
};
