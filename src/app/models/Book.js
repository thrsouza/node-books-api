const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'The name must be informed'] },
    year: { type: Number, required: [true, 'The year must be informed'] },
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'author',
      required: [true, 'The author must be informed']
    },
    createAt: { type: Date, required: true, default: Date.now }
  },
  {
    versionKey: false
  }
)

BookSchema.virtual('id').get(function () {
  return this._id.toHexString()
})

BookSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id
  }
})

module.exports = mongoose.model('book', BookSchema, 'books')
