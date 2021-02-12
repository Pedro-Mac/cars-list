"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  BRAND: {
    type: String
  },
  MODEL: {
    type: String
  },
  DEALER: { type: String },
  MIN_MILEAGE: {
    type: Number
  },
  MAX_MILEAGE: {
    type: Number
  }
});

module.exports = mongoose.model("Car", schema);
