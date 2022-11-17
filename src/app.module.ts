import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'clave1234',
    database: 'expense_tracker',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), UsersModule, ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
