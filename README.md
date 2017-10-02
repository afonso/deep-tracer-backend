# Deep Tracer

## Commands

```bash
npm test # test using Jest
npm run test:unit # run unit tests
npm run test:integration # run integration tests
npm run coverage # test and open the coverage report in the browser
npm run lint # lint using ESLint
npm run dev # run the API in development mode
npm run prod # run the API in production mode
npm run docs # generate API docs
```

## Playing locally

First, you will need to install and run [MongoDB](https://www.mongodb.com/) in another terminal instance.

```bash
$ mongod
```

Then, run the server in development mode.

```bash
$ npm run dev
Express server listening on http://0.0.0.0:9000, in development mode
```

### Example of POST
```
POST: http://localhost:9000/tracers
BODY: application/json
{
    "id": "73b4afbf-91c1-4b10-a4d0-fab083827948",
    "parentId": "770b80bb-2a77-406d-b7bc-d00cb2dbf4b8",
    "contextId": "770b80bb-2a77-406d-b7bc-d00cb2dbf4b8",
    "request": {
        "ip": "::ffff:127.0.0.1",
        "method": "GET",
        "url": "http://localhost:3001/",
        "headers": {
            "accept": "application/json, text/plain, */*",
            "x-parent-request-id": "770b80bb-2a77-406d-b7bc-d00cb2dbf4b8",
            "x-request-context-id": "770b80bb-2a77-406d-b7bc-d00cb2dbf4b8",
            "user-agent": "axios/0.16.2",
            "host": "localhost:3002",
            "connection": "close"
        }
    },
    "response": {
        "status": 200,
        "headers": {
            "x-powered-by": "Express",
            "x-request-id": "73b4afbf-91c1-4b10-a4d0-fab083827948",
            "x-parent-request-id": "770b80bb-2a77-406d-b7bc-d00cb2dbf4b8",
            "x-request-context-id": "770b80bb-2a77-406d-b7bc-d00cb2dbf4b8"
        },
        "body": "hello world!"
    },
    "startedAt": 1506713597922,
    "finishedAt": 1506713597951
}
```

### Example of GET
```
GET: http://localhost:9000/tracers/59d269b9ba5a4022144cd6eb
```
## Directory structure

### Overview

You can customize the `src` and `api` directories.

```
src/
├─ api/
│  ├─ your-api/
│  │  ├─ controller.js
│  │  ├─ index.js
│  │  ├─ index.test.js
│  │  ├─ model.js
│  │  └─ model.test.js
│  └─ index.js
├─ services/
│  ├─ express/
│  ├─ facebook/
│  ├─ mongoose/
│  ├─ passport/
│  ├─ sendgrid/
│  └─ your-service/
├─ app.js
├─ config.js
└─ index.js
```

### src/api/

Here is where the API endpoints are defined. Each API has its own folder.

#### src/api/some-endpoint/model.js

It defines the Mongoose schema and model for the API endpoint. Any changes to the data model should be done here.

#### src/api/some-endpoint/controller.js

This is the API controller file. It defines the main router middlewares which use the API model.

#### src/api/some-endpoint/index.js

This is the entry file of the API. It defines the routes using, along other middlewares (like session, validation etc.), the middlewares defined in the `some-endpoint.controller.js` file.

### services/

Here you can put `helpers`, `libraries` and other types of modules which you want to use in your APIs.
