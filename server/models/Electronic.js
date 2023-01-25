// The electronics model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ElectronicSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})
module.exports = mongoose.model('Electronic', ElectronicSchema, 'Electronic')
