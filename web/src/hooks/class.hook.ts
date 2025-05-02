import { classService } from "../services";
import { useStore } from "../store";

export const useGetClasses = () => {
  const { setClasses } = useStore();

  const getClasses = async () => {
    const res = await classService.getAll();
    setClasses(res.data);
  };

  return { getClasses };
};
