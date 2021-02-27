import {createConnection} from "typeorm";
import { Request, Response} from "express";
import express from "express";
import cors from 'cors';
import bodyParser = require('body-parser');
import {AppRoutes} from "./routes";
import dotenv from "dotenv";

createConnection().then(async connection => {

    dotenv.config();

    // create express app
    const app : any = express();
    app.use(bodyParser.json());
    app.use(cors());

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // run app
    app.listen(process.env.SERVER_PORT);

    console.log("Express application is up and running on port 3000");

}).catch(error => console.log("TypeORM connection error: ", error));
