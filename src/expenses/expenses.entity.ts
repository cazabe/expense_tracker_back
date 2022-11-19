import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

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
    @ManyToOne(() => User, user => user.expenses, { eager: true })
    @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
    user: User
    @Column()
    user_id: number;
}