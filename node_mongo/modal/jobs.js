const mongoose = require("mongoose");
const jobsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  employmentType: { type: String, required: true },
  workMode: { type: String, required: true },
  skills: [
    {
      type: String,
      required: true,
    },
  ],
  candidates: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    },
  ],
});
const Jobs = mongoose.model("jobs", jobsSchema);
module.exports = Jobs;
