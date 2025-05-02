import axios from "axios";
import { getEndpoint } from "../constants";
import { ICreateClassRequest, IUpdateClassRequest } from "../interfaces";

const getAll = () => {
  return axios.get(getEndpoint().class.getAll);
};

const create = (data: ICreateClassRequest) => {
  return axios.post(getEndpoint().class.create, data);
};

const updateClass = (id: number, data: IUpdateClassRequest) => {
  return axios.put(getEndpoint(id).class.update, data);
};

const deleteClass = (id: number) => {
  return axios.delete(getEndpoint(id).class.delete);
};

export const classService = { getAll, create, updateClass, deleteClass };
