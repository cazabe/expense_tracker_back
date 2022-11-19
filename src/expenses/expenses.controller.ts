import { Controller, Post, Get, Body } from '@nestjs/common';
import { ExpenseDTO } from './dto/expenses_dto';
import { Expenses } from './expenses.entity';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
    constructor(private expenseService: ExpensesService) { }
    @Get()
    getExpenses(): Promise<Expenses[]> {
        return this.expenseService.getExpense();
    }
    @Post()
    createExpense(@Body() expense: ExpenseDTO) {
        return this.expenseService.createExpense(expense);
    }
}