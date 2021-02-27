import {createConnection} from "typeorm";
import { Request, Response} from "express";
import express from "express";
import cors from 'cors';
import bodyParser = require('body-parser');
import {AppRoutes} from "./routes";

createConnection().then(async connection => {

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
    app.listen(3000);

    console.log("Express application is up and running on port 3000");

}).catch(error => console.log("TypeORM connection error: ", error));