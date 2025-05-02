import axios from "axios";
import { getEndpoint } from "../constants";

const getCards = async () => {
  return axios.get(getEndpoint().cards.getAll);
};

const createCard = async (studentId: number) => {
  return axios.post(getEndpoint().cards.create, { studentId });
};

const deleteCard = async (id: number) => {
  return axios.delete(getEndpoint(id).cards.delete);
};

export const cardService = { getCards, createCard, deleteCard };
