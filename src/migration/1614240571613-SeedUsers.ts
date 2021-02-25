import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { UserSeed } from '../db/users.seed';

export class SeedUsers1614240571613 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository("User").save(UserSeed).catch(error => console.log("Duplicate entries not allowed "));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User");
    }

}
