const express = require("express");
const router = express.Router();
const electronicController = require('../../controllers/electronicController');

router.get("/", electronicController.getElectronic);
router.post("/addElectronic", electronicController.addElectronic);

module.exports = router;
