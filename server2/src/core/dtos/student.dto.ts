import { CardEntity, ClassEntity, StudentEntity } from '../entities';

export class StudentDto extends StudentEntity {
  lop: ClassEntity;
  card: CardEntity;
}

export class CreateStudentDto {
  classId?: number;
  name: string;
  email: string;
  lng?: number;
  lat?: number;
}

export class UpdateStudentDto {
  classId?: number;
  name?: string;
  email?: string;
}

export class CreateBatchStudentDto {
  className: string;
  name: string;
  email: string;
  lng?: number;
  lat?: number;
}
