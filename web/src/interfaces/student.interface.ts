import { ICard } from "./card.interface";
import { IClass } from "./class.interface";

export interface IStudent {
  id: number;
  name: string;
  email: string;
  lat?: number;
  lng?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  card?: ICard;
  lop?: IClass;
}

export interface ICreateStudentRequest {
  name: string;
  email: string;
  classId?: number;
}

export interface IUpdateStudentRequest {
  classId?: number;
  name?: string;
  email?: string;
}
