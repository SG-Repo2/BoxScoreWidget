import React from 'react';
import MLBPlayerRow from './MLBPlayerRow';

const MLBPlayerStats = ({ players }) => (
  <table className="player-stats-table">
    <thead>
      <tr>
        <th>Hitters</th>
        <th>AB</th>
        <th>R</th>
        <th>H</th>
        <th>RBI</th>
        <th>HR</th>
        <th>BB</th>
        <th>K</th>
        <th>AVG</th>
        <th>OBP</th>
        <th>SLG</th>
      </tr>
    </thead>

    <tbody>
      {players.map((player) => (
        <MLBPlayerRow key={player.display_name} player={player} />
      ))}
    </tbody>
  </table>
);

export default MLBPlayerStats;
