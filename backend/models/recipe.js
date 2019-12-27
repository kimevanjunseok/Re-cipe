const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userid: { type: mongoose.Types.ObjectId, ref: "user" },
  ingredients: { type: Array, required: true },
  info: { type: Array, required: true },
  picture: { type: String, required: true },
  summary: { type: String },
  nation: { type: String },
  level: { type: String },
  category: { type: String },
  cal: { type: String },
  qnt: { type: String }
});

module.exports = mongoose.model("Recipe", recipeSchema);
