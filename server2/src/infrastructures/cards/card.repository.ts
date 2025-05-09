import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardEntity } from 'src/core/entities';
import { DataSource, IsNull, Repository, UpdateResult } from 'typeorm';

interface ICardRepository {
  findAll(): Promise<CardEntity[]>;
  findById(id: number): Promise<CardEntity>;
  findByStudentId(studentId: number): Promise<CardEntity>;
  create(card: CardEntity): Promise<CardEntity>;
  createBatch(cards: CardEntity[]): Promise<CardEntity[]>;
  update(card: CardEntity): Promise<CardEntity>;
  delete(id: number): Promise<UpdateResult>;
}

@Injectable()
export class CardRepository implements ICardRepository {
  constructor(
    @InjectRepository(CardEntity)
    private readonly cardRepository: Repository<CardEntity>,
    private readonly dataSource: DataSource,
  ) {}

  findAll(): Promise<CardEntity[]> {
    return this.cardRepository.find({
      where: { deletedAt: IsNull() },
      order: { id: 'ASC' },
    });
  }

  findById(id: number): Promise<CardEntity> {
    return this.cardRepository.findOneBy({ id });
  }

  findByStudentId(studentId: number): Promise<CardEntity> {
    return this.cardRepository.findOneBy({ studentId });
  }

  create(card: CardEntity): Promise<CardEntity> {
    return this.cardRepository.save(card);
  }

  createBatch(cards: CardEntity[]): Promise<CardEntity[]> {
    return this.dataSource.transaction(async (manager) => {
      return manager.save(cards);
    });
  }

  update(card: CardEntity): Promise<CardEntity> {
    return this.cardRepository.save(card);
  }

  delete(id: number): Promise<UpdateResult> {
    return this.cardRepository.softDelete(id);
  }
}
