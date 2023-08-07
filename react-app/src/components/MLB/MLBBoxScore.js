import React from 'react';

function MLBBoxScore({ data }) {
    const { event_information, away_team, home_team, away_period_scores, home_period_scores } = data;

    const isPreGame = event_information.status === "pre";
    const isPostGame = event_information.status === "completed";
    const isInGame = !isPreGame && !isPostGame; // Assuming any other status would be in-game

    const inningHeaders = Array.from({ length: data.away_period_scores.length }, (_, i) => i + 1);

    return (
        <div>
            <h2>{data.status}</h2>

            {isPostGame && <h1>FINAL</h1>}
            {isPreGame && <p>{new Date(event_information.start_date_time).toLocaleString("en-US", { timeZone: "America/Chicago", hour: '2-digit', minute: '2-digit' })} CST</p>}
            {isInGame && (
                <p>
                    {event_information.half} of Inning {event_information.inning} | Outs: {event_information.outs}
                </p>
            )}

            <table className="scores-table">
                <thead>
                    <tr>
                        <th></th>
                        {inningHeaders.map((inning, index) => (
                            <th key={index}>{inning}</th>
                        ))}
                        <th>R</th>
                        <th>H</th>
                        <th>E</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.away_team.abbreviation}</td>
                        {data.away_period_scores.map((score, index) => (
                            <td key={index}>{score}</td>
                        ))}
                        <td>{data.away_period_scores.reduce((a, b) => a + b, 0)}</td>
                        <td>{data.away_batter_totals.hits}</td>
                        <td>{data.away_errors}</td>
                    </tr>
                    <tr>
                        <td>{data.home_team.abbreviation}</td>
                        {data.home_period_scores.map((score, index) => (
                            <td key={index}>{score}</td>
                        ))}
                        <td>{data.home_period_scores.reduce((a, b) => a + b, 0)}</td>
                        <td>{data.home_batter_totals.hits}</td>
                        <td>{data.home_errors}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MLBBoxScore;
