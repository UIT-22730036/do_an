import axios from "axios";
import { getEndPoints } from "../constants";

const getStudents = async () => {
  const res = await axios.get(getEndPoints().students.getStudents);
  return res;
};

const getStudentsByClass = async (tenLop) => {
  const res = await axios.get(
    `${getEndPoints().students.getStudentsByClass}?tenLop=${tenLop}`,
  );
  return res;
};

const createStudent = async (tenSV, email, tenLop) => {
  const res = await axios.post(getEndPoints().students.createStudent, {
    tenSV,
    email,
    tenLop,
  });
  return res;
};

export const studentService = {
  getStudents,
  createStudent,
  getStudentsByClass,
};
