// The food model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})
module.exports = mongoose.model('Food', FoodSchema, 'Food')
