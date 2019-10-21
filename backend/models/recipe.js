const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: String,
  userid: String,
  ingredients: Array,
  info: Array,
  picture: String
});

module.exports = mongoose.model("Recipe", recipeSchema);
