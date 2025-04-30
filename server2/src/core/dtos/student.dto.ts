import { ClassEntity, StudentEntity } from '../entities';

export class StudentDto extends StudentEntity {
  lop: ClassEntity;
}

export class CreateStudentDto {
  maLop?: number;
  tenSv: string;
  email: string;
}
