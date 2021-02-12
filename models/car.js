"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  brand: {
    type: String,
  },
  brandModel: {
    type: String,
  },
  dealer: { type: String },
  min_mileage: {
    type: Number,
  },
  max_mileage: {
    type: Number,
  },
});

module.exports = mongoose.model("Car", schema);
