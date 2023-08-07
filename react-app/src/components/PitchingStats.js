import React, { useState } from 'react';

function PitchingStats({ awayPitchers, homePitchers }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button onClick={toggleCollapse}>
        {isCollapsed ? 'Show Pitching Stats' : 'Hide Pitching Stats'}
      </button>

      {!isCollapsed && (
        <div className="pitching-stats-container">
          <div className="team-stats">
            <h3>Away Team</h3>
            <table>
              <thead>
                   <tr>
                     <th>Pitcher</th>
                     <th>IP</th>
                     <th>ER</th>
                     <th>K</th>
        <!-- Add more columns as needed -->
                   </tr>
              </thead>
              <tbody>
                {awayPitchers.map((pitcher, index) => (
                  <tr key={index}>
                   <td>{pitcher.name}</td>
                       <td>{pitcher.innings_pitched}</td>
                       <td>{pitcher.earned_runs}</td>
                       <td>{pitcher.strike_outs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="team-stats">
            <h3>Home Team</h3>
            <table>
              <thead>
                {/* Add table headers here */}
              </thead>
              <tbody>
                {homePitchers.map((pitcher, index) => (
                  <tr key={index}>
                    {/* Render pitcher stats here */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default PitchingStats;
