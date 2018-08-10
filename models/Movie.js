const mongoose = require('mongoose')

const Movie = new mongoose.Schema({
  title: { type: String, trim: true, default: '' },
  year: { type: String, trim: true , default: ''},
  imdb: { type: String, default: '' },
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Movie', Movie)
