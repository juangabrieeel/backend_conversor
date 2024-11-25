const mongoose = require("mongoose");

// Modelo para la base de datos
const conversionSchema = new mongoose.Schema({
  inputValue: { type: String, required: true },
  outputValue: { type: String, required: true },
  conversionType: { type: String, required: true },
});

module.exports = mongoose.model("Conversion", conversionSchema);
