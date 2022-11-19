import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expenses } from './expenses.entity';
import { ExpenseDTO } from './dto/expenses_dto';
import { Repository } from 'typeorm';

@Injectable()
export class ExpensesService {
    constructor(@InjectRepository(Expenses) private expenseRepository: Repository<Expenses>) { }

    createExpense(expense: ExpenseDTO) {
        const newExpense = this.expenseRepository.create(expense);
        return this.expenseRepository.save(newExpense);
    }

    getExpense() {
        return this.expenseRepository.find();
    }
}
