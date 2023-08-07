import React from 'react';
import NBAPlayerRow from './NBAPlayerRow';

const NBAPlayerStats = ({ players, playerType }) => (
  <table className="player-stats-table">
    <thead>
      <tr>
        <th>{playerType}</th>
        <th>MIN</th>
        <th>FG</th>
        <th>3PT</th>
        <th>FT</th>
        <th>AST</th>
        <th>TO</th>
        <th>ORB</th>
        <th>DRB</th>
        <th>REB</th>
        <th>PTS</th>
      </tr>
    </thead>
    <tbody>
      {players.map((player) => (
        <NBAPlayerRow key={player.display_name} player={player} />
      ))}
    </tbody>
  </table>
);

export default NBAPlayerStats;
