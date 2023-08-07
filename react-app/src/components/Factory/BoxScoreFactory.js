import React from 'react';
import NBABoxScore from './NBABoxScore';
import MLBBoxScore from './MLBBoxScore';

const BoxScoreFactory = ({ league, data }) => {
    switch (league) {
        case 'NBA':
            return <NBABoxScore data={data} />;
        case 'MLB':
            return <MLBBoxScore data={data} />;
        default:
            return <div>Invalid League</div>;
    }
};

export default BoxScoreFactory;