import { IPosition } from "./position.interface";

export interface IProperty {
  id: number;
  name: string;
  positionId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  position: IPosition;
}

export interface IUpdatePropRequest {
  name: string;
}

export interface ICreatePropRequest {
  name: string;
  positionId: number;
}
