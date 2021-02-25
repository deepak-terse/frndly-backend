import {Entity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class UserRelation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    requesterId: string;

    @Column()
    addresseeId: string;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}