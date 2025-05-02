export interface IProperty {
  id: number;
  name: string;
  positionId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
