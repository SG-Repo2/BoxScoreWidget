export const getMLBStats = (data) => ({
   awayStats: data.away_batters,
   homeStats: data.home_batters
});

export const getNBAStats = (data) => {
   const awayStarters = data.away_stats.filter(player => player.is_starter);
   const awayBench = data.away_stats.filter(player => !player.is_starter);

   const homeStarters = data.home_stats.filter(player => player.is_starter);
   const homeBench = data.home_stats.filter(player => !player.is_starter);

   return {
      awayStats: [...awayStarters, ...awayBench],
      homeStats: [...homeStarters, ...homeBench]
   };
};