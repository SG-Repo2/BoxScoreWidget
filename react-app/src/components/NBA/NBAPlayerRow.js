import React from 'react';

const NBAPlayerRow = ({ player, columns }) => (
  <tr>
    <td>
      {player.first_name[0] + "." + player.last_name} 
      <span className="player-name">{" " + player.position}</span>
    </td>
    <td>{player.minutes}</td>
    <td>{player.field_goals_made + " - " + player.field_goals_attempted}</td>
    <td>{player.three_point_field_goals_made + " - " + player.three_point_field_goals_attempted}</td>
    <td>{player.free_throws_made + " - " + player.free_throws_attempted}</td>
    <td>{player.assists}</td>
    <td>{player.turnovers}</td>
    <td>{player.offensive_rebounds}</td>
    <td>{player.defensive_rebounds}</td>
    <td>{player.defensive_rebounds + player.offensive_rebounds}</td>
    <td>{player.points}</td>
  </tr>
);

export default NBAPlayerRow;
