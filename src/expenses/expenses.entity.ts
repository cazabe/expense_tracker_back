import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'expenses' })
export class Expenses {
    @Column()
    @PrimaryGeneratedColumn()
    expense_id: number
    @Column()
    description: string
    @Column()
    paymant_type: string
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created: Date;
    @Column()
    status: string
    @ManyToOne(() => User, user => user.expenses)
    user: User
}