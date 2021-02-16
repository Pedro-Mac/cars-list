"use strict";
const { Router } = require("express");
const csv = require("csv-parser");
const fs = require("fs");

const router = new Router();
const Car = require("../models/car");
const {
  compareAscending,
  compareDescending
} = require("./helpers/compareStrings");
const createFilters = require("./helpers/createFilters");

router.get("/cars", async (req, res, next) => {
  const { direction, filter } = req.query;
  const results = [];

  fs.createReadStream("DB.csv")
    .pipe(csv())
    .on("data", data => results.push(data))
    .on("end", () => {
      const filteredList = () => {
        if (filter) {
          return results.filter(item => filter.includes(item.BRAND));
        } else {
          return results;
        }
      };

      const orderedList =
        direction === "ascending"
          ? filteredList().sort(compareAscending)
          : filteredList().sort(compareDescending);

      const filters = createFilters(results);

      res.json({ type: "success", orderedList, filters });
    });
});

module.exports = router;
