import React from 'react';
import NBAPlayerRow from './NBAPlayerRow';
import PlayerStats from '../PlayerStats'; 
function NBATeamStats({ teamName, players, playerType }) {
 const columns = [
    { key: 'player_name', label: playerType || 'Player' }, 
    { key: 'minutes', label: 'MIN' },
    { key: 'field_goals', label: 'FG' },
    { key: 'three_point_field_goals', label: '3PT' },
    { key: 'free_throws', label: 'FT' },
    { key: 'assists', label: 'AST' },
    { key: 'turnovers', label: 'TO' },
    { key: 'offensive_rebounds', label: 'ORB' },
    { key: 'defensive_rebounds', label: 'DRB' },
    { key: 'total_rebounds', label: 'REB' },
    { key: 'points', label: 'PTS' }
  ];

  return (
    <div className="team-stats">
      <h2>{teamName} Stats</h2>
      {players && players.length > 0 && (
        <PlayerStats players={players} columns={columns} PlayerRowComponent={NBAPlayerRow} />
      )}
    </div>
  );
}

export default NBATeamStats;
