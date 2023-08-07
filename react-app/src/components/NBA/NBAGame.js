import React from 'react';
import NBABoxScore from './NBABoxScore';
import NBATeamStats from './NBATeamStats';

function NBAGame({ data }) {
   if (!data || !data.away_team || !data.home_team) {
      return <div>Data incomplete or not available for NBA.</div>;
   }


   const awayStarters = data.away_stats.filter(player => player.is_starter);
   const awayBench = data.away_stats.filter(player => !player.is_starter);


   const homeStarters = data.home_stats.filter(player => player.is_starter);
   const homeBench = data.home_stats.filter(player => !player.is_starter);

 return (
   <>
      <NBABoxScore data={data} />
      <NBATeamStats 
         teamName={data.away_team.full_name} 
         players={[...awayStarters, ...awayBench]} 
      />
      <NBATeamStats 
         teamName={data.home_team.full_name} 
         players={[...homeStarters, ...homeBench]} 
      />
   </>
);
}

export default NBAGame;
