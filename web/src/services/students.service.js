import axios from "axios";
import { getEndPoints } from "../constants";

const getStudents = async () => {
  const res = await axios.get(getEndPoints().students.getStudents);
  return res;
};

const createStudent = async (tenSV, email, lop) => {
  const res = await axios.post(getEndPoints().students.createStudent, {
    tenSV,
    email,
    lop,
  });
  return res;
};

export const studentService = { getStudents, createStudent };
