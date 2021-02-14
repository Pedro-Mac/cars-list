"use strict";
const { Router } = require("express");
const router = new Router();
const Car = require("../models/car");
const {
  compareAscending,
  compareDescending
} = require("./helpers/compareStrings");

router.get("/cars", async (req, res, next) => {
  const { direction } = req.query;
  try {
    const carList = await Car.find();

    const orderedList =
      direction === "ascending"
        ? carList.sort(compareAscending)
        : carList.sort(compareDescending);

    res.json({ type: "success", orderedList });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
