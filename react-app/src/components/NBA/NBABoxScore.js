import React from 'react';

function NBABoxScore({ data }) {
    const { event_information, away_team, home_team, away_period_scores, home_period_scores } = data;

    const isPreGame = event_information.status === "pre";
    const isPostGame = event_information.status === "completed";
    const isInGame = !isPreGame && !isPostGame; // Assuming any other status would be in-game

    const getPeriodLabel = (index) => {
        if (index < 4) return `Q${index + 1}`;
        return `OT${index - 3}`;
    };

    return (
        <div>
            <h2>{data.status}</h2>

            {isPostGame && <h1>FINAL</h1>}
            {isPreGame && <p>{new Date(event_information.start_date_time).toLocaleString("en-US", { timeZone: "America/Chicago", hour: '2-digit', minute: '2-digit' })} CST</p>}
            {isInGame && <p>{event_information.clock}</p>} {/* Display the game clock if in-game */}

            <table className="scores-table">
                <thead>
                    <tr>
                        <th>Team</th>
                        {away_period_scores.map((_, index) => (
                            <th key={index}>{getPeriodLabel(index)}</th>
                        ))}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{away_team.first_name + " " + away_team.last_name}</td>
                        {away_period_scores.map((score, index) => (
                            <td key={index}>{score}</td>
                        ))}
                        <td>{away_period_scores.reduce((a, b) => a + b, 0)}</td>
                    </tr>
                    <tr>
                        <td>{home_team.first_name + " " + home_team.last_name}</td>
                        {home_period_scores.map((score, index) => (
                            <td key={index}>{score}</td>
                        ))}
                        <td>{home_period_scores.reduce((a, b) => a + b, 0)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NBABoxScore;
