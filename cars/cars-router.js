const express = require("express");

const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});



router.post("/", (req, res) => {
    const carData = req.body;
    db("cars")
  .insert(carData)
  .then((car) => {
    res.status(201).json(car);
  })

    .catch((err) => {
        res.status(500).json({ message: "Failed to add Car", err });
    });
});

module.exports = router; 