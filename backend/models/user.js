const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userid: String,
    password: String,
    ingredients: Array,
});

module.exports = mongoose.model('User', userSchema);