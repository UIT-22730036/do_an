import axios from "axios";
import { getEndpoint } from "../constants";

const getProps = () => {
  return axios.get(getEndpoint().props.getAll);
};

export const propService = { getProps };
