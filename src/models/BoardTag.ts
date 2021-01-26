import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToMany,
    DeleteDateColumn,
} from 'typeorm';

import Board from './Board';

@Entity({ name: 'BOARD_TAG' })
export default class BoardTag extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ type: 'text' })
    public name: string;

    @ManyToMany((type) => Board, (board) => board.tags)
    public boards: Board[];

    @DeleteDateColumn()
    public deletedAt: Date;
}
