const BookModel = require('../models/Book')

class AuthorController {
  async select (req, res) {
    const result = await BookModel.find({}).populate({
      path: 'author',
      model: 'author'
    })
    res.status(200).json(result)
  }

  async selectOne (req, res) {
    const result = await BookModel.findOne({ _id: req.params.id }).populate({
      path: 'author',
      model: 'author'
    })

    if (result === null) return res.sendStatus(404)
    return res.status(200).json(result)
  }

  async create (req, res) {
    const result = await BookModel.create(req.body)
    res.status(201).json(result)
  }

  async update (req, res) {
    await BookModel.updateOne({ _id: req.params.id }, req.body)
    res.sendStatus(204)
  }

  async delete (req, res) {
    await BookModel.deleteOne({ _id: req.params.id })
    res.sendStatus(204)
  }
}

module.exports = new AuthorController()
