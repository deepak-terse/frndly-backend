import {Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {User} from './User';

@Entity()
export class UserRelation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => User) @JoinColumn() 
    requester: User;

    @ManyToOne(type => User) @JoinColumn() 
    addressee: User;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}