import {getAllUsers} from "../controller/UserController";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/users",
        method: "get",
        action: getAllUsers
    }
];