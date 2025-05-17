import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateBatchStudentDto,
  CreateStudentDto,
  StudentDto,
  UpdateStudentDto,
} from 'src/core/dtos';
import { CardEntity, ClassEntity, StudentEntity } from 'src/core/entities';
import { CardRepository } from 'src/infrastructures/cards/card.repository';
import { ClassRepository } from 'src/infrastructures/class/class.repository';
import { StudentRepository } from 'src/infrastructures/students/student.repository';
import { UpdateResult } from 'typeorm';
import { ClassUseCase } from '../class/class.usecase';

interface IStudentUseCase {
  findAll(): Promise<StudentDto[]>;
  create(data: CreateStudentDto): Promise<StudentEntity>;
  createBatch(data: CreateStudentDto[]): Promise<StudentEntity[]>;
  update(id: number, data: UpdateStudentDto): Promise<StudentEntity>;
  delete(id: number): Promise<UpdateResult>;
}

@Injectable()
export class StudentUseCase implements IStudentUseCase {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private readonly studentRepository: StudentRepository,
    @Inject('CLASS_REPOSITORY')
    private readonly classRepository: ClassRepository,
    @Inject('CARD_REPOSITORY')
    private readonly cardRepository: CardRepository,
    @Inject('CLASS_USE_CASE')
    private readonly classUseCase: ClassUseCase,
  ) {}

  async findAll() {
    const students = await this.studentRepository.findAll();

    const classes: ClassEntity[] = [];
    const cards: CardEntity[] = [];

    for (const student of students) {
      const lop = await this.classRepository.findById(student.classId ?? -1);
      const card = await this.cardRepository.findByStudentId(student.id);

      classes.push(lop);
      cards.push(card);
    }

    return students.map((student, index) => ({
      ...student,
      lop: classes[index],
      card: cards[index],
    }));
  }

  async create(data: CreateStudentDto) {
    const student = new StudentEntity();
    student.classId = data.classId;
    student.email = data.email;
    student.name = data.name;
    student.lat = data.lat;
    student.lng = data.lng;
    return this.studentRepository.create(student);
  }

  async createBatch(data: CreateBatchStudentDto[]): Promise<StudentEntity[]> {
    const students = [];
    const createStudentData: CreateStudentDto = { name: '', email: '' };
    for (const item of data) {
      createStudentData.name = item.name;
      createStudentData.email = item.email;
      createStudentData.lng = item.lng;
      createStudentData.lat = item.lat;

      const lop = await this.classRepository.findByName(item.className);
      if (!lop) {
        const newLop = await this.classUseCase.create({ name: item.className });
        createStudentData.classId = newLop.id;
      } else {
        createStudentData.classId = lop.id;
      }
      const student = new StudentEntity();
      student.classId = createStudentData.classId;
      student.email = createStudentData.email;
      student.name = createStudentData.name;
      student.lng = createStudentData.lng;
      student.lat = createStudentData.lat;
      students.push(student);
    }

    return this.studentRepository.createBatch(students);
  }

  async update(id: number, data: UpdateStudentDto): Promise<StudentEntity> {
    try {
      const student = await this.studentRepository.findById(id);
      if (!student) throw new NotFoundException('Student not found');

      Object.keys(data).forEach((key) => {
        student[key] = data[key];
      });

      return this.studentRepository.update(student);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(id: number): Promise<UpdateResult> {
    return this.studentRepository.delete(id);
  }
}
