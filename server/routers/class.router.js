const express = require("express");
const classController = require("../controller/class.controller");
const classRouter = express.Router();

classRouter.get("/", classController.getClasses);
classRouter.post("/create", classController.createClass);

module.exports = classRouter;
