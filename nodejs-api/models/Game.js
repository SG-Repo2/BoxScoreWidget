const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
   gameId: String,
   data: Object,
   lastUpdated: Date
});

module.exports = mongoose.model('Game', gameSchema);
