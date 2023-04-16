const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  featured: {
    type: Boolean,
  },
  price: {
    type: Number,
  },
  company: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const productsModel = mongoose.model("productsCol", productsSchema);

module.exports = productsModel;
