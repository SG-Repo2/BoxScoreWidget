import React from 'react';

const PlayerStats = ({ players, columns, PlayerRowComponent }) => (
  <table className="player-stats-table">
    <thead>
      <tr>
        {columns.map(column => <th key={column.key}>{column.label}</th>)}
      </tr>
    </thead>
    <tbody>
      {players.map(player => (
        <PlayerRowComponent key={player.display_name} player={player} columns={columns} />
      ))}
    </tbody>
  </table>
);

export default PlayerStats;

