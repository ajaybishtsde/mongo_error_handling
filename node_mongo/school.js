const mongoose = require("mongoose");
const schoolSchema = new mongoose.Schema({
  name: String,
});
const School = new mongoose.model("schools", schoolSchema);
module.exports = School;
