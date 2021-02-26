import {getUsers, getUserFriends, getUserMutualFriends} from "../controller/UserController";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/getUsers",
        method: "post",
        action: getUsers
    },
    {
        path: "/getUserFriends",
        method: "post",
        action: getUserFriends
    },
    {
        path: "/getUserMutualFriends",
        method: "post",
        action: getUserMutualFriends
    }
];