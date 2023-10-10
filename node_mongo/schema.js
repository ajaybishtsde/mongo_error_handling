const mongoose = require("mongoose");
const studentsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  subjectsId: { type: mongoose.Schema.Types.ObjectId, ref: "subjects" },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const IcsStudents = new mongoose.model("students", studentsSchema);
module.exports = IcsStudents;
