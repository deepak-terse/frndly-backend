import { getRepository, MigrationInterface, QueryRunner, getManager } from "typeorm";
import { UserSeed } from '../db/users.seed';

export class SeedUsers1614240571613 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository("User").save(UserSeed)
            .catch(error => console.log("Error while saving all Users", error));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await getManager().query('DELETE FROM user')
            .catch(error => console.log("Error while deleting all Users", error));
    }
}
