const { studentService } = require("../service");
const classService = require("../service/class.service");

const getStudents = async (req, res) => {
  try {
    const students = await studentService.getStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createStudent = async (req, res) => {
  const { tenSV, email, tenLop } = req.body;
  try {
    const lop = await classService.getClassByName(tenLop);
    if (!lop) {
      return res.status(404).json({ message: "Lớp không tồn tại" });
    }

    const student = await studentService.createStudent(tenSV, email, lop.maLop);

    await classService.updateClass({
      maLop: lop.maLop,
      soSV: lop.soSV + 1,
    });

    res.status(201).json(student);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(400).json({ message: "Email sinh viên đã tồn tại" });
    }

    res.status(500).json({ message: error.message });
  }
};

const studentController = { getStudents, createStudent };

module.exports = studentController;
