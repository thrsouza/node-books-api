const { Router } = require('express')
const routes = Router()

const AuthorController = require('./app/controllers/AuthorController')
const BookController = require('./app/controllers/BookController')

// authors
routes.get('/authors', AuthorController.select)
routes.get('/authors/:id', AuthorController.selectOne)
routes.post('/authors', AuthorController.create)
routes.put('/authors/:id', AuthorController.update)
routes.delete('/authors/:id', AuthorController.delete)

// books
routes.get('/books', BookController.select)
routes.get('/books/:id', BookController.selectOne)
routes.post('/books', BookController.create)
routes.put('/books/:id', BookController.update)
routes.delete('/books/:id', BookController.delete)

module.exports = routes
