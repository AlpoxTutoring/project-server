import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    DeleteDateColumn,
    ManyToOne,
} from 'typeorm';

import User from './User';
import Board from './Board';

@Entity({ name: 'BOARD_COMMENT' })
export default class BoardComment extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ type: 'text' })
    public content: string;

    @ManyToOne((type) => Board, (board) => board.comments)
    public board: Board;

    @ManyToOne((type) => User, (user) => user.id)
    public user: User;

    @DeleteDateColumn()
    public deletedAt: Date;
}
