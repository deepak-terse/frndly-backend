import { getRepository, MigrationInterface, QueryRunner, getManager } from "typeorm";

export class SeedUserRelations1614241369756 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const allUsers : any = await getRepository("User").find()
            .catch(error => console.log("Error while fetching all Users", error));

        var userRelationSeed : any = []

        //Logic to pair random users as friends
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

        await getRepository("UserRelation").save(userRelationSeed)
            .catch(error => console.log("Error while saving User Relations", error));;
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await getManager().query('DELETE FROM user_relation')
            .catch(error => console.log("Error while deleting all User Relations", error));
    }
}
