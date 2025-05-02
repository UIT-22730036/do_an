export interface IClass {
  id: number;
  name: string;
  studentCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateClassRequest {
  name: string;
}

export interface IUpdateClassRequest {
  name: string;
}
