import axios from "axios";
import { getEndPoints } from "../constants";

const getStudents = async () => {
  const res = await axios.get(getEndPoints().students.getStudents);
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

export const studentService = { getStudents, createStudent };
