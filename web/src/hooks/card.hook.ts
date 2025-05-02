import { cardService } from "../services";
import { useStore } from "../store";

export const useGetCards = () => {
  const { setCards } = useStore();

  const getCards = async () => {
    const res = await cardService.getCards();
    setCards(res.data);
  };

  return { getCards };
};
