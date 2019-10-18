const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: String,
  picture: String
});

module.exports = mongoose.model("Ingedient", ingredientSchema);
