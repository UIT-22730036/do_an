import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto, UpdateCardDto } from 'src/core/dtos';
import { CardEntity } from 'src/core/entities';
import { CardRepository } from 'src/infrastructures/cards/card.repository';

interface ICardUseCase {
  findAll(): Promise<CardEntity[]>;
  create(data: CreateCardDto): Promise<CardEntity>;
  createBatch(data: CreateCardDto[]): Promise<CardEntity[]>;
  update(id: number, data: UpdateCardDto): Promise<CardEntity>;
  delete(id: number);
}

@Injectable()
export class CardUseCase implements ICardUseCase {
  constructor(
    @Inject('CARD_REPOSITORY')
    private readonly cardRepository: CardRepository,
  ) {}

  findAll(): Promise<CardEntity[]> {
    return this.cardRepository.findAll();
  }

  create(data: CreateCardDto): Promise<CardEntity> {
    const card = new CardEntity();

    card.studentId = data.studentId;

    return this.cardRepository.create(card);
  }

  createBatch(data: CreateCardDto[]): Promise<CardEntity[]> {
    const cards = [];
    for (const item of data) {
      const log = new CardEntity();

      log.studentId = item.studentId;

      cards.push(log);
    }

    return this.cardRepository.createBatch(cards);
  }

  async update(id: number, data: UpdateCardDto): Promise<CardEntity> {
    try {
      const card = await this.cardRepository.findById(id);
      if (!card) throw new NotFoundException('Card not found');

      Object.keys(data).forEach((key) => {
        card[key] = data[key];
      });

      return this.cardRepository.update(card);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  delete(id: number) {
    return this.cardRepository.delete(id);
  }
}
