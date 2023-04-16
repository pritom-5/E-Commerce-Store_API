require("dotenv").config();
const initialProducts = require("../initialProducts.json");
const connectDb = require("../db/db");
const productsModel = require("../models/productsModel");

const populateFn = async () => {
  try {
    await connectDb();
    await productsModel.deleteMany();
    const responseFromDb = await productsModel.create(initialProducts);
    console.log(responseFromDb);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

populateFn();
