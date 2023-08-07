import React from 'react';

const PlayerRow = ({ player, columns }) => (
  <tr>
    {columns.map(column => (
      <td key={column.key}>{player[column.key]}</td>
    ))}
  </tr>
);

export default PlayerRow;