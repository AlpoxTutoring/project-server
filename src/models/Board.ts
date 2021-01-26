import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    ManyToMany,
    JoinTable,
    CreateDateColumn,
    DeleteDateColumn,
    OneToMany,
} from 'typeorm';

import User from './User';
import BoardCategory from './BoardCategory';
import BoardTag from './BoardTag';
import BoardComment from './BoardComment';

@Entity({ name: 'BOARD' })
export default class Board extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ type: 'text' })
    public title: string;

    @Column({ type: 'text' })
    public content: string;

    @ManyToOne((type) => User, (user) => user.boards, { eager: true })
    public user: User;

    @ManyToOne((type) => BoardCategory, (category) => category.boards, {
        eager: true,
    })
    public category: BoardCategory;

    @OneToMany((type) => BoardComment, (comment) => comment.board)
    public comments: BoardComment[];

    @ManyToMany((type) => BoardTag, (tag) => tag.boards, { eager: true })
    @JoinTable({ name: 'BOARD_TAG_RELATION' })
    public tags: BoardTag[];

    @DeleteDateColumn()
    public deletedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;
}
