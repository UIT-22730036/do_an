import axios from "axios";
import { getEndPoints } from "../constants";

const getClasses = async () => {
  const res = await axios.get(getEndPoints().class.getClasses);
  return res;
};

const createClass = async (tenLop) => {
  const res = await axios.post(getEndPoints().class.createClass, {
    tenLop,
  });
  return res;
};

export const classService = { getClasses, createClass };
