if (process.env.NODE_ENV !== "production")
  require("dotenv").config({ path: "./config.env" });

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoute = require("./routes/auth.js");
const { verifyToken, verifyUser } = require("./utils/verifyToken.js");
const errorMiddleware = require("./utils/errorMiddleware.js");

const app = express();
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

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

app.get("/api/", verifyToken, (req, res, next) => {
  res.status(200).json(req.user);
});

app.use(errorMiddleware);

app.listen(3001, () => {
  console.log("connected successfully");
});
