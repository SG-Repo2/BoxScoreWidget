import NBATeamStats from '../NBA/NBATeamStats';
import TeamStatsMLB from '../MLB/TeamStatsMLB';

function TeamStatsFactory({ league, data }) {
    switch (league) {
        case 'nba':
            return <NBATeamStats {...data} />;
        case 'mlb':
            return <TeamStatsMLB {...data} />;
        default:
            return null;
    }
}

export default TeamStatsFactory;
