const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
  dbName: "DB",
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connect"));

module.exports = db;
