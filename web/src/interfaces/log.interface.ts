export interface ILog {
  id: number;
  cardId: number;
  positionId: number;
  time: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
