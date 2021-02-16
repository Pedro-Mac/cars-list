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
  const { direction, filter } = req.query;

  try {
    //this queries properly, but it will limit the filters on the client side
    //const carList = await Car.find({ BRAND: { $in: filter } });
    const carList = await Car.find();
    const filteredList = () => {
      if (filter) {
        return carList.filter(item => filter.includes(item.BRAND));
      } else {
        return carList;
      }
    };

    const orderedList =
      direction === "ascending"
        ? filteredList().sort(compareAscending)
        : filteredList().sort(compareDescending);

    const filters = createFilters(carList);

    res.json({ type: "success", orderedList, filters });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
