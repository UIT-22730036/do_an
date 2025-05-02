export interface IPosition {
  id: number;
  type: string;
  name: string;
  lngs: number[];
  lats: number[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
