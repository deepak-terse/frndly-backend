import { getRepository, MigrationInterface, QueryRunner } from "typeorm";

export class SeedUserRelations1614241369756 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const allUsers : any = await getRepository("User").find();

        var userRelationSeed : any = []

        while(userRelationSeed.length<25){
            const randomUser1 = allUsers[Math.floor(Math.random() * allUsers.length)].id
            const randomUser2 = allUsers[Math.floor(Math.random() * allUsers.length)].id

            if(randomUser1 != randomUser2){
                userRelationSeed.push({
                    requesterId: randomUser1,
                    addresseeId: randomUser2
                });
            }
        }

        await getRepository("UserRelation").save(userRelationSeed).catch(error => console.log("Duplicate entries not allowed "));;
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("UserRelation");
    }

}
