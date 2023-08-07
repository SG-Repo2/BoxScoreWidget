import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GameFactory from './Factory/GameFactory';



function GameBoxScore({ gameId }) {
   const [data, setData] = useState(null);

   useEffect(() => {
      async function fetchData() {
         const response = await axios.get(`http://localhost:5000/game/${gameId}`);
         setData(response.data);
      }
      fetchData();
   }, [gameId]);

   if (!data) return <p>Loading...</p>;

   return (
    <div className="game-boxscore">
            <h1>{data.league}</h1>
           
            <GameFactory league={data.league} data={data} />
        </div>
   );
}

export default GameBoxScore;
