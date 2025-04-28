const classService = require("../service/class.service");

const getClasses = async (req, res) => {
  try {
    const classes = await classService.getClasses();
    res.status(200).json(classes);
  } catch (error) {
    console.error("Error in getClasses controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createClass = async (req, res) => {
  const { tenLop } = req.body;
  try {
    const newClass = await classService.createClass(tenLop);
    res.status(201).json(newClass);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(400).json({ message: "Tên lớp đã tồn tại" });
    }

    console.error("Error in createClass controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const classController = { getClasses, createClass };
module.exports = classController;
