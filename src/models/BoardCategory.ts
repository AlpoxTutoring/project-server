import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
    DeleteDateColumn,
} from 'typeorm';

import Board from './Board';

@Entity({ name: 'BOARD_CATEGORY' })
export default class BoardCategory extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ type: 'text' })
    public name: string;

    @OneToMany((type) => Board, (board) => board.category)
    public boards: Board[];

    @DeleteDateColumn()
    public deletedAt: Date;
}
