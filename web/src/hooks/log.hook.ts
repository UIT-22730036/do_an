import { logService } from "../services";
import { useStore } from "../store";

export const useGetLogs = () => {
  const { setLogs } = useStore();

  const getLogs = async () => {
    const res = await logService.getLogs();
    setLogs(res.data);
  };

  return { getLogs };
};
