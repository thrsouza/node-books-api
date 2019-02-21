# NODE-BOOKS-API

This project was created as an example of "How to Create a Nodejs API" for educational porposes.

### Requirements

- [Nodejs](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [VS Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/products/docker-engine)

### Start Server

To install all dependencies, you must run the following command:

```
$ yarn
```

To run the application:

```
$ yarn start
```

To start server into a _docker container_:

```
$ docker build -t somadevs/node-books-api .
$ docker run --name node-books-api -p 3000:3000 -d somadevs/node-books-api
```

<br />

> Configure the connection string into: **./src/app/config.json** <br />
> As an suggestion, use a database on the **mLab** platform: [https://mlab.com/](https://mlab.com/)

<br />

### Endpoints

**Authors**

- GET: _/api/authors_

```javascript
// GET http://localhost:3000/api/authors
// RESPONSE (STATUS: 200)
[
  {
    name: "Thiago de Souza",
    createAt: "2019-02-20T15:37:56.316Z",
    id: "5c6d74540529cf1790d0249f"
  }
];
```

- GET: _/api/authors/:id_

```javascript
// GET http://localhost:3000/api/authors/:id
// RESPONSE (STATUS: 200)
{
"name": String,
"createAt": Date,
"id": String
}
```

- POST: _/api/authors/_

```javascript
// POST http://localhost:3000/api/authors
// REQUEST (BODY: JSON)
{
"name": String
}

// RESPONSE (STATUS: 201)
{
"name": String,
"createAt": Date,
"id": String
}
```

- PUT: _/api/authors/:id_

```javascript
// PUT http://localhost:3000/api/authors/:id
// REQUEST (BODY: JSON)
{
"name": String
}

// RESPONSE (STATUS: 204)
```

- DELETE: _/api/authors/:id_

```javascript
// DELETE http://localhost:3000/api/authors/:id
// RESPONSE (STATUS: 204)
```

<br />

**Books**

- GET: _/api/books_

```javascript
// GET http://localhost:3000/api/books
// RESPONSE (STATUS: 200)
[
  {
    name: String,
    year: Number,
    author: {
      name: String,
      createAt: Date,
      id: String
    },
    createAt: Date,
    id: String
  }
];
```

- GET: _/api/books/:id_

```javascript
// GET http://localhost:3000/api/books/:id
// RESPONSE (STATUS: 200)
{
 "name": String,
 "year": Number,
 "author": {
   "name": String,
   "createAt": Date,
   "id": String
 },
 "createAt": Date,
 "id": String
}
```

- POST: _/api/books/_

```javascript
// POST http://localhost:3000/api/books/:id
// REQUEST (BODY: JSON)
 {
   "name": String,
   "year": Number,
   "author": String
 }

 // RESPONSE (STATUS: 201)
 {
   "name": String,
   "year": Number,
   "author": {
     "name": String,
     "createAt": Date,
     "id": String
   },
   "createAt": Date,
   "id": String
 }
```

- PUT: _/api/books/:id_

```javascript
// PUT http://localhost:3000/api/books/:id
// REQUEST (BODY: JSON)
{
  "name": String,
  "year": Number,
  "author": String
}

// RESPONSE (STATUS: 204)
```

- DELETE: _/api/books/:id_

```javascript
// DELETE http://localhost:3000/api/books/:id
// RESPONSE (STATUS: 204)
```

<hr />

### ABOUT US:

_Somadevs_ was born with the purpose of helping the community/developers on daily problems and (mainly) to present some of the best development tools and technologies.

<small>
MEDIUM: https://medium.com/somadevs<br>
E-MAIL: contact@somadevs.com <br>
</small>
