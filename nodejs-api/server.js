const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');

// Use the cors middleware to allow requests from any origin (not recommended for production)
app.use(cors());


app.use(bodyParser.json()); // Middleware to parse JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb+srv://sgroebe10:1234@cluster0.sc7enn4.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a Mongoose Schema and Model for the game data
const gameSchema = new mongoose.Schema({
  gameId: String,
  data: Object,
  lastUpdated: Number
});

const Game = mongoose.model('Game', gameSchema);

app.get('/game/:gameId', async (req, res) => {
  const { gameId } = req.params;
  let feedUrl = '';

  switch(gameId) {
    case 'nba':
      feedUrl = 'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json';
      break;
    case 'mlb':
      feedUrl = 'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json';
      break;
    default:
      return res.status(400).json({ error: 'Invalid gameId provided' });
  }

  const game = await Game.findOne({ gameId });

  if (game && (Date.now() - game.lastUpdated) < 15000) {
    return res.json(game.data);
  }

  try {
    const response = await axios.get(feedUrl);
    const feedData = response.data;

    if (game) {
      game.data = feedData;
      game.lastUpdated = Date.now();
      await game.save();
    } else {
      await Game.create({
        gameId,
        data: feedData,
        lastUpdated: Date.now()
      });
    }

    res.json(feedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// PUT route to update game data
app.put('/game/:gameId', async (req, res) => {
    const { gameId } = req.params;
    const updatedData = req.body;

    try {
        let game = await Game.findOne({ gameId });
        if (!game) {
            return res.status(404).json({ error: 'Game not found' });
        }
        game.data = updatedData;
        game.lastUpdated = Date.now();
        await game.save();
        res.json(game);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update game data' });
    }
});

// DELETE route to delete game data
app.delete('/game/:gameId', async (req, res) => {
    const { gameId } = req.params;

    try {
        const result = await Game.deleteOne({ gameId });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Game not found' });
        }
        res.json({ message: 'Game data deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete game data' });
    }
});

// Handle server shutdown
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB disconnected on app termination');
    process.exit(0);
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
