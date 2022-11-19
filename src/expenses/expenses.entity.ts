import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'expenses' })
export class Expenses {
    @Column()
    @PrimaryGeneratedColumn()
    expense_id: number
    @Column()
    description: string
    @Column({ type: 'numeric', precision: 5, scale: 2, })
    amount: number
    @Column()
    paymant_type: string
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created: Date;
    @Column({ type: 'char', length: 1 })
    status: string
    @Column({ type: 'varchar', length: 200 })
    user_name: string
    @Column({ type: 'int' })
    user_id: number
    @ManyToOne(() => User, (user) => user.expenses)
    user: User
}