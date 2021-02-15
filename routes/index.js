"use strict";
const { Router } = require("express");
const router = new Router();
const Car = require("../models/car");
const {
  compareAscending,
  compareDescending
} = require("./helpers/compareStrings");
const createFilters = require("./helpers/createFilters");

router.get("/cars", async (req, res, next) => {
  const { direction } = req.query;
  try {
    const carList = await Car.find();
    const orderedList =
      direction === "ascending"
        ? carList.sort(compareAscending)
        : carList.sort(compareDescending);

    const filters = createFilters(orderedList).map(item => ({
      filter: item,
      isActive: false
    }));

    res.json({ type: "success", orderedList, filters });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
