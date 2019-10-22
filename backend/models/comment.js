const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  recipeid: String,
  userid: String,
  content: String
});

module.exports = mongoose.model("Comment", commentSchema);
