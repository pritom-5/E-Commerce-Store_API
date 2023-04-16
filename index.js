// access .env variables
require("dotenv").config();

const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./db/db");
const app = express();

// access json files sent from frontend
app.use(express.json());

// port
const port = process.env.PORT || 5000;

// routes
app.use("/products", require("./routes/products"));

//not found
// error middleware
app.use(errorHandler);

// listen
const startServer = async () => {
  try {
    await connectDb();
    app.listen(port, () => console.log(`listening to: ${port}`));
  } catch (error) {
    console.log("ERRORS_______________: ", error);
  }
};

startServer();
