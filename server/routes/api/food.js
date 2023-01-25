const express = require("express");
const router = express.Router();
const foodController = require('../../controllers/foodController');

router.get("/", foodController.getFood);
router.post("/addFood", foodController.addFood);

module.exports = router;
