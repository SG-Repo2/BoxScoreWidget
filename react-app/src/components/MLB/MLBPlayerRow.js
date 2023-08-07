import React from 'react';

const MLBPlayerRow = ({ player, columns }) => (
  <tr>
    <td>
      {player.first_name[0] + "." + player.last_name} 
      <span className="player-name">{player.position}</span>
    </td>
    {columns.slice(1).map(column => (
      (column.key === 'avg' || column.key === 'obp' || column.key === 'slg') ?
        <td key={column.key}>{parseFloat(player[column.key]).toFixed(3).slice(1)}</td> :
        <td key={column.key}>{player[column.key]}</td>
    ))}
  </tr>
);

export default MLBPlayerRow;
