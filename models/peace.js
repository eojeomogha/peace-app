const mongoose = require('mongoose');

const Schema = mongoose.Schema

const peaceSchema = new Schema({
  name: String,
  game: { 
    type: String,
    enum: ['DOTA', 'Irl', 'LoL', 'Smite']
  },
  when: {
    type: Date,
    default: Date.now
  },
  troll: {
    type: String,
    enum: ['Cheater', 'Griefer', 'Inter', 'Racist', 'Toxic']
  },
  details: String
})

// Add boolean field hasRevengeHappened? = False
// In controller, find everyone if boolean = false.


module.exports = mongoose.model('Peace', peaceSchema)