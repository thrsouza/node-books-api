const AuthorModel = require('../models/Author')

class AuthorController {
  async select (req, res) {
    const result = await AuthorModel.find({})
    res.status(200).json(result)
  }

  async selectOne (req, res) {
    const result = await AuthorModel.findOne({ _id: req.params.id })

    if (result === null) return res.sendStatus(404)
    return res.status(200).json(result)
  }

  async create (req, res) {
    const result = await AuthorModel.create(req.body)
    res.status(201).json(result)
  }

  async update (req, res) {
    await AuthorModel.updateOne({ _id: req.params.id }, req.body)
    res.sendStatus(204)
  }

  async delete (req, res) {
    await AuthorModel.deleteOne({ _id: req.params.id })
    res.sendStatus(204)
  }
}

module.exports = new AuthorController()
