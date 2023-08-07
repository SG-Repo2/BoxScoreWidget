import React, { useState } from 'react';
import './App.css';
import GameBoxScore from './components/GameBoxScore';
import './components/GameBoxScore.css';
function App() {
  const [selectedGame, setSelectedGame] = useState('nba'); // default to NBA

  return (
    <div className="App">
      <header className="App-header">
        
        <select 
    value={selectedGame} 
    onChange={e => setSelectedGame(e.target.value)}
    className="custom-dropdown"
>
    <option value="nba">nba</option>
    <option value="mlb">mlb</option>
</select>

        <GameBoxScore gameId={selectedGame} />
      </header>
    </div>
  );
}

export default App;
