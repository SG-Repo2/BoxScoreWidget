import React from 'react';
import BoxScoreFactory from './BoxScoreFactory';
import TeamStatsFactory from './TeamStatsFactory';

function Game({ data, getTeamStats }) {
   if (!data || !data.away_team || !data.home_team) {
      return <div>Data incomplete or not available.</div>;
   }

   const { awayStats, homeStats } = getTeamStats(data);

   return (
      <>
         <BoxScoreFactory league={data.league} data={data} />
         <TeamStatsFactory league={data.league} teamName={data.away_team.full_name} players={awayStats} />
         <TeamStatsFactory league={data.league} teamName={data.home_team.full_name} players={homeStats} />
      </>
   );
}

export default Game;
