import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpenseDto } from './dto/expense_dto';
import { Expenses } from './expenses.entity';

@Injectable()
export class ExpensesService {
    constructor(@InjectRepository(Expenses) private expensesRepository: Repository<Expenses>) { }

    async createExpense(expense: ExpenseDto) {
        const newExpense = this.expensesRepository.create(expense);
        await this.expensesRepository.save(newExpense);
    }

    getExpenses() {
        return this.expensesRepository.find();
    }
}
