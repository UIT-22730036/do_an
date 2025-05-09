import axios from "axios";
import { getEndpoint } from "../constants";

const getPositions = () => {
  return axios.get(getEndpoint().positions.getAll);
};

const deletePosition = (id: number) => {
  return axios.delete(getEndpoint(id).positions.delete);
};

export const positionService = { getPositions, deletePosition };
