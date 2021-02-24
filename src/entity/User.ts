import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    avatar: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}