import { propService } from "../services";
import { useStore } from "../store";

export const useGetProperties = () => {
  const { setProperties } = useStore();

  const getProperties = async () => {
    const res = await propService.getProps();
    setProperties(res.data);
  };

  return { getProperties };
};
