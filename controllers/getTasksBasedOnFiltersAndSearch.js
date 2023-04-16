const asyncHandler = require("express-async-handler");
const productsModel = require("../models/productsModel");
const transformNumericsToMongoQueryFormat = require("../util/transformNumericsToMongoQueryFormat");

const getTasksBasedOnFiltersAndSearch = asyncHandler(async (req, res) => {
  const queriesAndSearchesObj = req.query;
  const { name, price, company, rating, featured, page } =
    queriesAndSearchesObj;

  const queryObjPassMongoose = {};

  // match searched name against the regex
  if (name) {
    const transformedNameQuery = { $regex: name, $options: "i" };
    queryObjPassMongoose.name = transformedNameQuery;
  }

  if (company) queryObjPassMongoose.company = company;
  if (featured) queryObjPassMongoose.featured = featured;

  if (price) {
    queryObjPassMongoose.price = transformNumericsToMongoQueryFormat(
      10000,
      0,
      price
    );
  }

  if (rating) {
    queryObjPassMongoose.rating = transformNumericsToMongoQueryFormat(
      5,
      0,
      rating
    );
  }

  const limitMaxNoOfQueryPerRequest = 10;
  if (page) nosQueryToSkip = (page - 1) * limitMaxNoOfQueryPerRequest;

  const responseFromDb = await productsModel
    .find(queryObjPassMongoose)
    .limit(limitMaxNoOfQueryPerRequest)
    .skip(nosQueryToSkip);

  if (!responseFromDb) {
    res.status(400);
    throw new Error("Can't fetch data");
  }

  res.status(200).json(responseFromDb);
});

module.exports = getTasksBasedOnFiltersAndSearch;

// TODO:
// add pagination limit and skip sort

// name -> search
// /api/products?price[gte]=4000&price[lte]=6000
