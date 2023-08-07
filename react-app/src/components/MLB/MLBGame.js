import React from 'react';
import MLBBoxScore from './MLBBoxScore';
import TeamStatsMLB from './TeamStatsMLB';

function MLBGame({ data }) {
   // Check if data exists and the required properties are available
   if (!data || !data.away_batter_totals || !data.home_batter_totals || !data.away_team || !data.home_team) {
      return <div>Data incomplete or not available for MLB.</div>;
   }

   return (
      <>
         <MLBBoxScore data={data} />
         <TeamStatsMLB teamName={data.away_team.full_name} players={data.away_batters} />
         <TeamStatsMLB teamName={data.home_team.full_name} players={data.home_batters} />
      </>
   );
}

export default MLBGame;
