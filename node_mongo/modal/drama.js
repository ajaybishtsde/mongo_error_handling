const mongoose = require("mongoose");
const dramaSchema = new mongoose.Schema({
  playName: { type: String, required: true },

  location: { type: String, required: true },
  isLive: {
    type: String,
    required: true,
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
});
const Drama = mongoose.model("Drama", dramaSchema);
module.exports = Drama;
