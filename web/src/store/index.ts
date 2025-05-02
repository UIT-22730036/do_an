import { create } from "zustand";
import { ICard, IClass, ILog, IPosition, IStudent } from "../interfaces";
import { IProperty } from "../interfaces/property.interface";

interface IState {
  students: IStudent[];
  classes: IClass[];
  cards: ICard[];
  logs: ILog[];
  positions: IPosition[];
  properties: IProperty[];

  setStudents: (students: IStudent[]) => void;
  setClasses: (classes: IClass[]) => void;
  setCards: (cards: ICard[]) => void;
  setLogs: (logs: ILog[]) => void;
  setPositions: (positions: IPosition[]) => void;
  setProperties: (props: IProperty[]) => void;
}

export const useStore = create<IState>()((set, get) => ({
  students: [],
  classes: [],
  cards: [],
  logs: [],
  positions: [],
  properties: [],

  setStudents: (students: IStudent[]) => {
    set({ students });
  },

  setClasses(classes) {
    set({ classes });
  },

  setCards(cards) {
    set({ cards });
  },

  setLogs(logs) {
    set({ logs });
  },

  setPositions(positions) {
    set({ positions });
  },

  setProperties(props) {
    set({ properties: props });
  },
}));
