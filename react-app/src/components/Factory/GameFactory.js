import React from 'react';
import NBAGame from '../NBA/NBAGame';
import MLBGame from '../MLB/MLBGame';

const GameFactory = ({ league, data }) => {
    switch (league) {
        case 'NBA':
            return <NBAGame data={data} />;
        case 'MLB':
            return <MLBGame data={data} />;
        default:
            return <div>Invalid League</div>;
    }
};

export default GameFactory;