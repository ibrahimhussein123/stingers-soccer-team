import { useState } from "react";

function PlayerProfile({ player, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!player) return null;

  const stats = {
    PAC: player.pace || 78,
    SHO: player.shooting || 72,
    PAS: player.passing || 75,
    DRI: player.dribbling || 76,
    DEF: player.defending || 70,
    PHY: player.physical || 78,
  };

  const overall = Math.round(
    Object.values(stats).reduce((a, b) => a + b, 0) /
      Object.values(stats).length
  );

  return (
    <div className="profile-overlay">

      <div className="profile-modal">

        <button
          className="profile-close"
          onClick={onClose}
        >
          ×
        </button>

        {/* TOP */}

        <div className="profile-top">

          <div className="profile-card">

            <div className="profile-card-bg"></div>

            <div className="profile-card-content">

              <div className="profile-rating">

                <strong>{overall}</strong>

                <span>
                  {player.position}
                </span>

              </div>

              <div className="profile-number">
                #{player.number || "—"}
              </div>

              <div className="profile-player-image">
                <div>
                  PLAYER
                  <br />
                  PHOTO
                </div>
              </div>

              <div className="profile-card-name">
                {player.name}
              </div>

              <div className="profile-card-meta">

                <span>
                  {player.position}
                </span>

                <span>
                  {player.height}
                </span>

                <span>
                  {player.weight} lbs
                </span>

              </div>

            </div>

          </div>


          {/* PLAYER INFO */}

          <div className="profile-information">

            <p className="eyebrow">
              CONCORDIA STINGERS
            </p>

            <h1>
              {player.name}
            </h1>

            <div className="profile-position">
              {player.position === "GK"
                ? "GOALKEEPER"
                : player.position === "D"
                ? "DEFENDER"
                : player.position === "M"
                ? "MIDFIELDER"
                : "FORWARD"}
            </div>

            <div className="profile-details">

              <div>
                <span>YEAR</span>
                <strong>
                  {player.year}
                </strong>
              </div>

              <div>
                <span>HEIGHT</span>
                <strong>
                  {player.height}
                </strong>
              </div>

              <div>
                <span>WEIGHT</span>
                <strong>
                  {player.weight} lbs
                </strong>
              </div>

            </div>

            <div className="profile-details">

              <div>
                <span>HOMETOWN</span>
                <strong>
                  {player.hometown}
                </strong>
              </div>

              <div>
                <span>PREVIOUS CLUB</span>
                <strong>
                  {player.lastTeam || "—"}
                </strong>
              </div>

            </div>

          </div>

        </div>


        {/* TABS */}

        <div className="profile-tabs">

          <button
            className={
              activeTab === "overview"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("overview")
            }
          >
            OVERVIEW
          </button>

          <button
            className={
              activeTab === "stats"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("stats")
            }
          >
            ATTRIBUTES
          </button>

          <button
            className={
              activeTab === "academic"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("academic")
            }
          >
            ACADEMIC
          </button>

        </div>


        {/* CONTENT */}

        {activeTab === "overview" && (

          <div className="profile-content">

            <div className="profile-section-title">
              PLAYER ATTRIBUTES
            </div>

            <div className="mini-stats">

              {Object.entries(stats).map(
                ([name, value]) => (

                  <div
                    className="mini-stat"
                    key={name}
                  >

                    <strong>
                      {value}
                    </strong>

                    <span>
                      {name}
                    </span>

                    <div className="stat-bar">

                      <div
                        style={{
                          width: `${value}%`,
                        }}
                      ></div>

                    </div>

                  </div>

                )
              )}

            </div>


            <div className="profile-section-title">
              PLAYER INFORMATION
            </div>

            <div className="information-grid">

              <div>
                <span>POSITION</span>
                <strong>
                  {player.position}
                </strong>
              </div>

              <div>
                <span>JERSEY</span>
                <strong>
                  #{player.number || "—"}
                </strong>
              </div>

              <div>
                <span>YEAR</span>
                <strong>
                  {player.year}
                </strong>
              </div>

              <div>
                <span>HOMETOWN</span>
                <strong>
                  {player.hometown}
                </strong>
              </div>

            </div>

          </div>

        )}


        {activeTab === "stats" && (

          <div className="profile-content">

            <div className="profile-section-title">
              FIFA ATTRIBUTES
            </div>

            <div className="big-stats">

              {Object.entries(stats).map(
                ([name, value]) => (

                  <div
                    className="big-stat"
                    key={name}
                  >

                    <div className="big-stat-number">
                      {value}
                    </div>

                    <div className="big-stat-name">
                      {name}
                    </div>

                    <div className="big-stat-bar">

                      <div
                        style={{
                          width: `${value}%`,
                        }}
                      ></div>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        )}


        {activeTab === "academic" && (

          <div className="profile-content">

            <div className="profile-section-title">
              ACADEMIC PROFILE
            </div>

            <div className="academic-card">

              <span>
                PROGRAM
              </span>

              <strong>
                {player.course}
              </strong>

            </div>

            <div className="academic-card">

              <span>
                YEAR
              </span>

              <strong>
                YEAR {player.year}
              </strong>

            </div>

            <div className="academic-message">
              Student-athlete at
              <strong>
                Concordia University
              </strong>
            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default PlayerProfile;