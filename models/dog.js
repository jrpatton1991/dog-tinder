var mongoose = require("mongoose");

var dogSchema = {
 name: String,
 photo: String,
 age: String
};

var Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog
