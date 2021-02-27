import dotenv from "dotenv";

dotenv.config();

module.exports = {
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": "",
    "database": process.env.DB_NAME,
    "synchronize": true,
    "logging": false,
    "entities": [
    	"src/entity/**/*.ts"
    ],
    "migrations": [
       	"src/migration/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration"
    }
}