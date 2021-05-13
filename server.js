require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 3000;

//database configuration
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("Connected to database");
});

//express configuration
app.use(express.json());

const todosRouter = require('./routes/todos');
app.use('/todos',todosRouter);

app.listen(PORT, () => {
  console.log("server started");
});
