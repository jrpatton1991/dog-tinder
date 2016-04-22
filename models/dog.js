var mongoose = require("mongoose");

var dogSchema = {
 name: String,
 photo: String,
 age: String,
 liked: Boolean
};

var Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog
