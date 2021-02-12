"use strict";

const { Router } = require("express");
const router = new Router();

router.get("/cars", (req, res, next) => {
  res.json({ type: "success", data: { title: "Hello World" } });
});

module.exports = router;
