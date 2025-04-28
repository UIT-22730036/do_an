import { create } from "zustand";

export const useClassStore = create((set) => ({
  classes: [],

  setClasses: (classes) => set({ classes }),
}));
