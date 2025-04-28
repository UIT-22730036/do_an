const express = require("express");
const studentRouter = express.Router();
const { studentController } = require("../controller");

studentRouter.get("/", studentController.getStudents);
studentRouter.post("/create", studentController.createStudent);

module.exports = studentRouter;
