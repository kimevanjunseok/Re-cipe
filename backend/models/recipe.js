const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: String,
  userid: String,
  // 얘는 재료입니다. 재료 오브젝트들을 받습니다. 아마도
  // ingredients: ingredientSchema,
  ingredients: Array,
  info: Array,
  picture: String
});

module.exports = mongoose.model("Recipe", recipeSchema);
