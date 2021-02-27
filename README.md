<p align="center"><img width="100"src="https://img2.pngio.com/nodejs-javascript-web-application-expressjs-computer-software-node-png-820_820.jpg"></p>

<h1 align="center"><strong>Frndly Backend</strong></h1>

<div align="center">
	<strong>
		A backend app for Frndly built with Express
	</strong>
</div>

<br>

<div align="center">
	<a href="https://nodejs.org/en/">
		<img src="https://img.shields.io/badge/node-%3E%3D%208.0.0-green.svg" alt="node version">
	</a>
	<a href="https://github.com/deepak-terse/vue-boilerplate">
		<img src="https://img.shields.io/badge/License-MIT-green.svg" alt="LICENSE">
	</a>
	<a href="https://medium.com/@iamdeepakterse">
		<img src="https://img.shields.io/badge/Blog-medium-orange" alt="Chat">
	</a>
	<a href="https://www.linkedin.com/in/deepak-terse/">
		<img src="https://img.shields.io/badge/Connect-linkedin-blue" alt="connect">
	</a>
	<a href="https://github.com/deepak-terse">
		<img src="https://img.shields.io/badge/Author-deepak--terse-blue" alt="Author deepak-terse">
	</a>
</div>

<br>


## Prerequisites
* Node
* npm

<br>

## Initial Setup

``` bash
# Clone the project
git clone https://github.com/deepak-terse/frndly-backend.git
cd frndly-backend

# Install dependencies
npm install

# Create mysql database for storing the data

# Create .env file in the root directory with the following configuration

# Run the below command to create tables as per the entities specified in the code
npm run start

# Run the migrations for seeding the database
npm run migrationUp
```

<br>

### Sample env configuration
``` bash 
# Database configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=username
DB_PASS=password
DB_NAME=frndly

# Server configuration
SERVER_HOST=localhost
SERVER_PORT=5000
```

<br>

## Running the application
``` bash
npm run start
```

<br>

## Working with migrations
``` bash
# To migrate the db up
npm run migrationUp

# To migrate the db down
npm run migrationDown
```

<br>

## Documentation
- [API Documentation](https://documenter.getpostman.com/view/984661/TWDcGvLf)

- [DB Schema](https://github.com/deepak-terse/frndly-backend/blob/main/docs/DB%20Schema.png)

<br>

## Dependencies

* express
* cors
* typescript
* mysql
* typeorm
* dotenv

<br>

## References
* https://developer.okta.com/blog/2018/11/15/node-express-typescript

<br>

## Licence

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020-present, [deepak-terse](https://github.com/deepak-terse).

