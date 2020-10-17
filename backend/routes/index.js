const express = require("express");
const router = express.Router();
const message = require("./message");

router.use("/", message);

module.exports = router;
