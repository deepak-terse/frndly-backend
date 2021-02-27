import {Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {User} from './User';

@Entity()
export class UserRelation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(type => User) @JoinColumn() 
    requesterId: User;

    @OneToOne(type => User) @JoinColumn() 
    addresseeId: User;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}