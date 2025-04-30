import axios from "axios";
import { getEndPoints } from "../constants";

const createCardByStudentId = async (maSV) => {
  const res = axios.post(getEndPoints().cards.createCard, { maSV });
  return res;
};

export const cardService = { createCardByStudentId };
