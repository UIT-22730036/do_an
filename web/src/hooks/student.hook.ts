import { studentService } from "../services";
import { useStore } from "../store";

export const useGetStudents = () => {
  const { setStudents } = useStore();

  const getStudents = async () => {
    const response = await studentService.getStudents();
    setStudents(response.data);
  };

  return { getStudents };
};
