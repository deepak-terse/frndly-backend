import { Request, Response } from "express";
import { getManager, In } from "typeorm";
import { User } from "../entity/User";
import { statusCodes, ResponseData} from "../config/constants";

export async function getUsers(request: Request, response: Response) {
    const userRepository = getManager().getRepository(User);

    const take : number = request.body.take || 10
    const skip : number = request.body.skip || 0

    const [result, count] = await userRepository.findAndCount({
        take: take,
        skip: skip
    });

    const responseData : ResponseData = {
        data: {result: result, count: count} ,
        statusCode: statusCodes.Success,
        message: "Users fetched successfully"
    }

    response.status(statusCodes.Success).send(responseData);
}

export async function getUserFriends(request: Request, response: Response) {

    const userRepository = getManager().getRepository(User);

    const userFriendIds = await getUserFriendIds([request.body.userId]);

    const [result, count] = await userRepository.findAndCount({
        where: {id: In(userFriendIds)}
    });

    const responseData : ResponseData = {
        data: {result: result, count: count} ,
        statusCode: statusCodes.Success,
        message: "User Friends fetched successfully"
    }

    response.status(statusCodes.Success).send(responseData);
}

export async function getUserMutualFriends(request: Request, response: Response) {

    const userRepository = getManager().getRepository(User);

    const userFriendIds = await getUserFriendIds([request.body.userId]);
    var userMutualFriendIds = await getUserFriendIds(userFriendIds);

    //Removes direct friends from Mutual Friend list
    userMutualFriendIds = userMutualFriendIds.filter((n: any) => !userFriendIds.includes(n));

    //Removes the given user from the Mutual Friend list
    userMutualFriendIds = userMutualFriendIds.filter((item: any) => item !== request.body.userId);

    //Removes duplicates from the Mutual Friend list
    userMutualFriendIds = userMutualFriendIds.filter((elem: any, index: any, self: any) => index === self.indexOf(elem));
    
    const [result, count] = await userRepository.findAndCount({
        where: {id: In(userMutualFriendIds)}
    });

    const responseData : ResponseData = {
        data: {result: result, count: count} ,
        statusCode: statusCodes.Success,
        message: "User Mutual Friends fetched successfully"
    }

    response.status(statusCodes.Success).send(responseData);
}


async function getUserFriendIds(userIds : any) {
    var userFriendIds : any = []; 

    for(const userId of userIds){
        const userFriends = await getManager().
        query(`(SELECT requesterId FROM user_relation WHERE  addresseeId = '${userId}')
            UNION
            (SELECT addresseeId FROM user_relation WHERE  requesterId = '${userId}') `);
                    
        const temp = userFriends.map(function(userFriend: any) {
            return userFriend['requesterId'];
        });

        userFriendIds.push.apply(userFriendIds, temp);
    }

    return userFriendIds;
}