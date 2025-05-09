import axios from "axios";
import { getEndpoint } from "../constants";
import {
  ICreatePropRequest,
  IUpdatePropRequest,
} from "../interfaces/property.interface";

const getProps = () => {
  return axios.get(getEndpoint().props.getAll);
};

const updateProp = (id: number, data: IUpdatePropRequest) => {
  return axios.put(getEndpoint(id).props.update, data);
};

const createProp = (data: ICreatePropRequest) => {
  return axios.post(getEndpoint().props.create, data);
};

const deleteProp = (id: number) => {
  return axios.delete(getEndpoint(id).props.delete);
};

export const propService = { getProps, updateProp, createProp, deleteProp };
