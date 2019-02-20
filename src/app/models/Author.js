const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'The name must be informed'] },
    createAt: { type: Date, required: true, default: Date.now }
  },
  {
    versionKey: false
  }
)

AuthorSchema.virtual('id').get(function () {
  return this._id.toHexString()
})

AuthorSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id
  }
})

module.exports = mongoose.model('author', AuthorSchema, 'authors')
