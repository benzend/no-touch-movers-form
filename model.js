const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  tel: Number,
  squrft: Number,
  startDate: Date,
  moveLoc: String,
  moveStreet: String,
  miscItems: Boolean,
  miscDesc: String,
  boxCount: Number,
  ourBoxes: Boolean,
  garage: Boolean,
  garageHeavy: Boolean,
  explain: String,
});

module.exports = mongoose.model("Info", infoSchema);
