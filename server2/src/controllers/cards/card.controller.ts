import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCardDto, UpdateCardDto } from 'src/core/dtos';
import { CardEntity } from 'src/core/entities';
import { CardUseCase } from 'src/usecases/cards/card.usecase';

interface ICardController {
  findAll(): Promise<CardEntity[]>;
  create(data: CreateCardDto): Promise<CardEntity>;
  update(id: number, data: UpdateCardDto): Promise<CardEntity>;
  delete(id: number);
}

@Controller('cards')
export class CardController implements ICardController {
  constructor(
    @Inject('CARD_USE_CASE')
    private readonly cardUseCase: CardUseCase,
  ) {}

  @Get()
  findAll(): Promise<CardEntity[]> {
    return this.cardUseCase.findAll();
  }

  @Post('/create')
  create(@Body() data: CreateCardDto): Promise<CardEntity> {
    return this.cardUseCase.create(data);
  }

  @Put('/update/:id')
  update(
    @Param('id') id: number,
    @Body() data: UpdateCardDto,
  ): Promise<CardEntity> {
    return this.cardUseCase.update(id, data);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: number) {
    return this.cardUseCase.delete(id);
  }
}
