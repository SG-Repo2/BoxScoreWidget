import React from 'react';
import PlayerStats from '../PlayerStats'; 
import MLBPlayerRow from './MLBPlayerRow';

function TeamStatsMLB({ teamName, players }) {
  const columns = [
    { key: 'player_name', label: 'Hitters' }, 
    { key: 'at_bats', label: 'AB' },
    { key: 'runs', label: 'R' },
    { key: 'hits', label: 'H' },
    { key: 'rbi', label: 'RBI' },
    { key: 'home_runs', label: 'HR' },
    { key: 'walks', label: 'BB' },
    { key: 'strike_outs', label: 'SO' },
    { key: 'avg', label: 'AVG' },
    { key: 'obp', label: 'OBP' },
    { key: 'slg', label: 'SLG' }
  ];

  return (
    <div className="team-stats">
      <h2>{teamName} Hitting</h2>
      {players && players.length > 0 && (
        <PlayerStats players={players} columns={columns} PlayerRowComponent={MLBPlayerRow} />
      )}
    </div>
  );
}

export default TeamStatsMLB;
