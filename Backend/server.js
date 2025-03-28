require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

app.use(cors(
  {
  origin: "http://localhost:5188",
  credentials: true , 
}
));



app.use(( req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});




app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log( `Server running on port ${PORT}`));