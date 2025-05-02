import { positionService } from "../services";
import { useStore } from "../store";

export const useGetPositions = () => {
  const { setPositions } = useStore();

  const getPositions = async () => {
    const res = await positionService.getPositions();
    setPositions(res.data);
  };

  return { getPositions };
};
