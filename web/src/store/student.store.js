import { create } from "zustand";

export const useStudentStore = create((set) => ({
  students: [],

  setStudents: (students) => set({ students }),
}));
