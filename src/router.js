const { Router } = require('express')
const routes = Router()

const AuthorController = require('./app/controllers/AuthorController')
const BookController = require('./app/controllers/BookController')

// authors
routes.get('/api/authors', AuthorController.select)
routes.get('/api/authors/:id', AuthorController.selectOne)
routes.post('/api/authors', AuthorController.create)
routes.put('/api/authors/:id', AuthorController.update)
routes.delete('/api/authors/:id', AuthorController.delete)

// books
routes.get('/api/books', BookController.select)
routes.get('/api/books/:id', BookController.selectOne)
routes.post('/api/books', BookController.create)
routes.put('/api/books/:id', BookController.update)
routes.delete('/api/books/:id', BookController.delete)

module.exports = routes
