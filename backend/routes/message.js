const express = require("express");
const route = express.Router();
const { postMessage } = require("../controller/message.controller");
const { getAllMessages } = require("../controller/message.controller");

route.get("/messages", getAllMessages);
route.post("/message/new", postMessage);

module.exports = route;
