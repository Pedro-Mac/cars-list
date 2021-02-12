"use strict";
const { Router } = require("express");
const router = new Router();
const Car = require("../models/car");
const compare = require("./helpers/compareStrings");

router.get("/cars", async (req, res, next) => {
  try {
    const carList = await Car.find();
    const brandList = [];
    const orderedList = carList.sort(compare);
    for (const el of orderedList) {
      if (!brandList.includes(el.BRAND))
        brandList.push({ brand: el.BRAND, cars: [] });
    }

    res.json({ type: "success", orderedList });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
