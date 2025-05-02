import axios from "axios";
import { getEndpoint } from "../constants";

const getLogs = () => {
  return axios.get(getEndpoint().logs.getAll);
};

export const logService = { getLogs };
