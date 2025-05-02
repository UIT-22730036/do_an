import axios from "axios";
import { getEndpoint } from "../constants";

const getPositions = () => {
  return axios.get(getEndpoint().positions.getAll);
};

export const positionService = { getPositions };
