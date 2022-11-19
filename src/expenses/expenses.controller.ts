import { Body, Controller, Post, Get } from '@nestjs/common';
import { ExpenseDto } from './dto/expense_dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) { }

  @Post()
  createExpense(@Body() newExpense: ExpenseDto) {
    this.expensesService.createExpense(newExpense);
  }

  @Get()
  getExpenses() {
    return this.expensesService.getExpenses();
  }
}
