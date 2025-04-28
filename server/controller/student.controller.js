const { studentService } = require("../service");

const getStudents = async (req, res) => {
  try {
    const students = await studentService.getStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createStudent = async (req, res) => {
  const { tenSV, email, lop } = req.body;
  try {
    const student = await studentService.createStudent(tenSV, email, lop);
    console.log(student);

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
