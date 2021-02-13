"use strict";
const { Router } = require("express");
const router = new Router();
const Car = require("../models/car");
const compare = require("./helpers/compareStrings");

router.get("/cars", async (req, res, next) => {
  try {
    const carList = await Car.find();

    const orderedList = carList.sort(compare);

    res.json({ type: "success", orderedList });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
