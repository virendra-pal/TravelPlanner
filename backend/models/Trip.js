const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  budget: { type: Number, required: true },
  checklist: { type: [String], default: [] }
});

module.exports = mongoose.model("Trip", tripSchema);