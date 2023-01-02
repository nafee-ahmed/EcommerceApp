const stripe = require("stripe")(process.env.STRIPE_API_KEY);

module.exports.initPayment = async (req, res, next) => {
  try {
    const total = req.body.total;
    const payment = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: "usd",
    });

    res.status(200).json({ clientSecret: payment.client_secret });
  } catch (error) {
    next(error);
  }
};

module.exports.createPayment = async (req, res, next) => {
  try {
    console.log(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    next(error);
  }
};
