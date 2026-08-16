import { useState } from "react";

function MatchCenter() {
  const [activeMatch, setActiveMatch] = useState(0);

  const matches = [
    {
      id: 1,
      status: "UPCOMING",
      date: "SEP 05",
      time: "7:00 PM",
      opponent: "MCGILL",
      location: "Montreal, QC",
      homeScore: "-",
      awayScore: "-",
    },
    {
      id: 2,
      status: "FINAL",
      date: "AUG 28",
      time: "6:30 PM",
      opponent: "UQAM",
      location: "Montreal, QC",
      homeScore: "3",
      awayScore: "1",
    },
    {
      id: 3,
      status: "FINAL",
      date: "AUG 21",
      time: "7:00 PM",
      opponent: "LAVAL",
      location: "Quebec City, QC",
      homeScore: "1",
      awayScore: "2",
    },
  ];

  const selected = matches[activeMatch];

  return (
    <section className="match-center">

      <div className="match-header">

        <div>
          <p className="eyebrow">
            CONCORDIA STINGERS
          </p>

          <h1>
            MATCH
            <span>CENTER.</span>
          </h1>
        </div>

        <div className="season-tag">
          2026 / 27
        </div>

      </div>

      <div className="match-layout">

        {/* MATCH LIST */}

        <div className="match-list">

          <div className="match-list-title">
            <span>FIXTURES</span>
            <strong>{matches.length}</strong>
          </div>

          {matches.map((match, index) => (

            <button
              key={match.id}
              className={`match-item ${
                activeMatch === index
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveMatch(index)}
            >

              <div className="match-date">
                <strong>
                  {match.date}
                </strong>

                <span>
                  {match.time}
                </span>
              </div>

              <div className="match-opponent">
                <span>CONCORDIA</span>
                <strong>
                  VS {match.opponent}
                </strong>
              </div>

              <div
                className={`match-status ${
                  match.status.toLowerCase()
                }`}
              >
                {match.status}
              </div>

            </button>

          ))}

        </div>

        {/* MAIN MATCH */}

        <div className="featured-match">

          <div className="featured-top">

            <span>
              {selected.status}
            </span>

            <small>
              {selected.date} • {selected.time}
            </small>

          </div>

          <div className="teams">

            <div className="team">

              <div className="team-logo">
                C
              </div>

              <h2>
                CONCORDIA
              </h2>

              <span>
                HOME
              </span>

            </div>

            <div className="score">

              <strong>
                {selected.homeScore}
              </strong>

              <span>
                :
              </span>

              <strong>
                {selected.awayScore}
              </strong>

            </div>

            <div className="team">

              <div className="opponent-logo">
                {selected.opponent.charAt(0)}
              </div>

              <h2>
                {selected.opponent}
              </h2>

              <span>
                AWAY
              </span>

            </div>

          </div>

          <div className="match-location">
            📍 {selected.location}
          </div>

          <div className="match-actions">

            <button>
              MATCH DETAILS
              <span>→</span>
            </button>

            <button>
              LINEUP
            </button>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="match-stats">

        <div className="stat-box">

          <span>POSSESSION</span>

          <div className="stat-values">
            <strong>58%</strong>
            <strong>42%</strong>
          </div>

          <div className="stat-bar">
            <div style={{ width: "58%" }} />
          </div>

        </div>

        <div className="stat-box">

          <span>SHOTS</span>

          <div className="stat-values">
            <strong>14</strong>
            <strong>7</strong>
          </div>

          <div className="stat-bar">
            <div style={{ width: "65%" }} />
          </div>

        </div>

        <div className="stat-box">

          <span>PASSES</span>

          <div className="stat-values">
            <strong>421</strong>
            <strong>318</strong>
          </div>

          <div className="stat-bar">
            <div style={{ width: "57%" }} />
          </div>

        </div>

        <div className="stat-box">

          <span>FOULS</span>

          <div className="stat-values">
            <strong>8</strong>
            <strong>11</strong>
          </div>

          <div className="stat-bar">
            <div style={{ width: "42%" }} />
          </div>

        </div>

      </div>

    </section>
  );
}

export default MatchCenter;