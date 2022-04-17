const express = require("express");
const cors = require("cors");

const connect = require("./configs/db");
const app = express();
app.use(express.json());
const residentController = require("./controller/residentController");
const flatController = require("./controller/flatController");
const blockController = require("./controller/blockController");
const userController = require("./controller/userController");
const { register, login } = require("./controller/authController");
app.use(cors());

app.use("/resident", residentController);
app.use("/flat", flatController);
app.use("/block", blockController);
app.post("/register", register);

let port = process.env.PORT || 4000;

app.post("/login", login);

app.listen(9000, async (req, res) => {
  try {
    await connect();
    console.log("connected on port 9000");
  } catch (error) {
    console.log(error.message);
  }
});
