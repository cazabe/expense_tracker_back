import { Expenses } from 'src/expenses/expenses.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @Column()
    @PrimaryGeneratedColumn()
    user_id: number;
    @Column({ unique: true })
    user_name: string;
    @Column()
    password: string;
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created: Date;
    @Column({ nullable: true })
    status: string
    @OneToMany(() => Expenses, (expense) => expense.user)
    expenses: Expenses[]
}