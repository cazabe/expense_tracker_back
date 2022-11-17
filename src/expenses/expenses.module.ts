import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesController } from './expenses.controller';
import { Expenses } from './expenses.entity';
import { ExpensesService } from './expenses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Expenses])],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})

export class ExpensesModule { }
