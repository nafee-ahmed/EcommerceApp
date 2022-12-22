if (process.env.NODE_ENV !== "production")
  require("dotenv").config({ path: "./config.env" });

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoute = require("./routes/auth.js");
const categoryRoute = require("./routes/category.js");
const { verifyToken, verifyUser } = require("./utils/verifyToken.js");
const errorMiddleware = require("./utils/errorMiddleware.js");

const app = express();
const corsOptions = {
  origin: `${process.env.FRONTEND_LINK}`,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  Headers: true,
};
app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to MONGODB ONLINE");
  })
  .catch((err) => {
    console.log(err);
  });

// middlewares for express Routes
app.use("/api/auth", authRoute);
app.use("/api/category", categoryRoute);

app.get("/api/", verifyToken, (req, res, next) => {
  res.status(200).json(req.user);
});

app.use(errorMiddleware);

app.listen(3001, () => {
  console.log("connected successfully");
});
