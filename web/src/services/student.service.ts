import axios from "axios";
import { getEndpoint } from "../constants";
import { ICreateStudentRequest, IUpdateStudentRequest } from "../interfaces";

const getStudents = async () => {
  return axios.get(getEndpoint().students.getAll);
};

const createStudent = async (data: ICreateStudentRequest) => {
  return axios.post(getEndpoint().students.create, data);
};

const updateStudent = async (id: number, data: IUpdateStudentRequest) => {
  return axios.put(getEndpoint(id).students.update, data);
};

const deleteStudent = async (id: number) => {
  return axios.delete(getEndpoint(id).students.delete);
};

export const studentService = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
