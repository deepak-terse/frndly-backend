import {Entity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
@Unique(['firstName', 'lastName'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {default: 'https://www.w3schools.com/howto/img_avatar.png'})
    avatar: string;

    @Column("varchar", { length: 20 })
    firstName: string;

    @Column("varchar", { length: 20 })
    lastName: string;

    @Column('boolean', {default: true})
    isActive: boolean;

    @Column('boolean', {default: false})
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}