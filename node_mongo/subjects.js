const mongoose = require("mongoose");
const subjects = new mongoose.Schema({
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "schools" },
  subject: String,
});
const Subject = new mongoose.model("subjects", subjects);
module.exports = Subject;
