import "./App.css";
import { useState } from "react";

import players from "./data/players";
import PlayerCard from "./components/PlayerCard";
import FootballPitch from "./components/FootballPitch";
import MatchCenter from "./components/MatchCenter";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [page, setPage] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const goalkeepers = players.filter(
    (player) => player.position === "GK"
  ).length;

  const defenders = players.filter(
    (player) => player.position === "D"
  ).length;

  const midfielders = players.filter(
    (player) => player.position === "M"
  ).length;

  const forwards = players.filter(
    (player) => player.position === "F"
  ).length;

  const fieldPlayers = players.length - goalkeepers;

  const averageYear =
    players.reduce(
      (sum, player) => sum + player.year,
      0
    ) / players.length;

  return (
    <div className="app">

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <nav className="navbar">

        <div
          className="logo"
          onClick={() => {
            setPage("home");

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <span>CONCORDIA</span>
          <strong>SOCCER</strong>
        </div>

        <div className="nav-links">

          <button
            onClick={() => {
              setPage("home");

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Home
          </button>

          <button
            onClick={() => {
              setPage("players");
              scrollToSection("players");
            }}
          >
            Players
          </button>

          <button
            onClick={() => {
              setPage("squad");
              scrollToSection("squad-builder");
            }}
          >
            Squad
          </button>

          <button
            onClick={() => {
              setPage("matches");
              scrollToSection("matches");
            }}
          >
            Matches
          </button>

          <button
            onClick={() => {
              setPage("stats");
              scrollToSection("stats");
            }}
          >
            Stats
          </button>

        </div>

        <button
          className="login-btn"
          onClick={() => {
            setPage("admin");
            scrollToSection("admin");
          }}
        >
          PLAYER LOGIN
        </button>

      </nav>


      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            CONCORDIA STINGERS
          </p>

          <h1>
            BUILT TO
            <span>COMPETE.</span>
          </h1>

          <p className="hero-text">
            Meet the players. Build the squad.
            Follow every match.
          </p>

          <div className="hero-buttons">

            <button
              className="squad-btn"
              onClick={() =>
                scrollToSection("squad-builder")
              }
            >
              BUILD THE SQUAD
              <span>→</span>
            </button>

            <button
              className="outline-btn"
              onClick={() =>
                scrollToSection("players")
              }
            >
              VIEW PLAYERS
            </button>

          </div>

        </div>


        <div className="hero-player">

          <PlayerCard
            player={players[0]}
          />

        </div>

      </section>


      {/* ================================================= */}
      {/* QUICK STATS */}
      {/* ================================================= */}

      <section className="quick-stats">

        <div className="quick-stat">
          <strong>{players.length}</strong>
          <span>PLAYERS</span>
        </div>

        <div className="quick-stat">
          <strong>11</strong>
          <span>STARTERS</span>
        </div>

        <div className="quick-stat">
          <strong>4</strong>
          <span>POSITIONS</span>
        </div>

        <div className="quick-stat">
          <strong>01</strong>
          <span>TEAM</span>
        </div>

      </section>


      {/* ================================================= */}
      {/* PLAYERS */}
      {/* ================================================= */}

      <section
        id="players"
        className="squad-section"
      >

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              THE TEAM
            </p>

            <h2>
              MEET THE
              <span>SQUAD.</span>
            </h2>

          </div>

          <p className="player-count">
            {players.length} PLAYERS
          </p>

        </div>


        <div className="players-grid">

          {players.map((player) => (

            <PlayerCard
              key={player.id}
              player={player}
            />

          ))}

        </div>

      </section>


      {/* ================================================= */}
      {/* FIFA SQUAD BUILDER */}
      {/* ================================================= */}

      <section id="squad-builder">

        <FootballPitch
          players={players}
        />

      </section>


      {/* ================================================= */}
      {/* MATCH CENTER */}
      {/* ================================================= */}

      <section
        id="matches"
        className="page-section"
      >

        <MatchCenter />

      </section>


      {/* ================================================= */}
      {/* TEAM STATS */}
      {/* ================================================= */}

      <section
        id="stats"
        className="stats-section"
      >

        <div className="stats-header">

          <div>

            <p className="eyebrow">
              TEAM DATA
            </p>

            <h2>
              TEAM
              <span>STATS.</span>
            </h2>

          </div>

          <div className="stats-season">

            <span>SEASON</span>

            <strong>
              2026
            </strong>

          </div>

        </div>


        {/* MAIN STAT CARDS */}

        <div className="stats-dashboard">

          <div className="main-stat-card">

            <div className="stat-card-top">

              <span>
                SQUAD SIZE
              </span>

              <span className="stat-icon">
                01
              </span>

            </div>

            <strong>
              {players.length}
            </strong>

            <p>
              REGISTERED PLAYERS
            </p>

            <div className="stat-line">
              <span></span>
            </div>

          </div>


          <div className="main-stat-card">

            <div className="stat-card-top">

              <span>
                STARTING XI
              </span>

              <span className="stat-icon">
                11
              </span>

            </div>

            <strong>
              11
            </strong>

            <p>
              STARTERS AVAILABLE
            </p>

            <div className="stat-line">
              <span></span>
            </div>

          </div>


          <div className="main-stat-card">

            <div className="stat-card-top">

              <span>
                POSITIONS
              </span>

              <span className="stat-icon">
                04
              </span>

            </div>

            <strong>
              4
            </strong>

            <p>
              POSITIONS COVERED
            </p>

            <div className="stat-line">
              <span></span>
            </div>

          </div>

        </div>


        {/* POSITION BREAKDOWN */}

        <div className="position-dashboard">

          <div className="position-title">

            <p className="eyebrow">
              SQUAD COMPOSITION
            </p>

            <h3>
              POSITION
              <span>BREAKDOWN</span>
            </h3>

          </div>


          <div className="position-bars">

            {/* GK */}

            <div className="position-row">

              <div className="position-label">

                <strong>
                  GK
                </strong>

                <span>
                  GOALKEEPERS
                </span>

              </div>

              <div className="position-bar">

                <div
                  style={{
                    width: `${
                      (goalkeepers /
                        players.length) *
                      100
                    }%`,
                  }}
                />

              </div>

              <strong className="position-number">
                {goalkeepers}
              </strong>

            </div>


            {/* DEFENDERS */}

            <div className="position-row">

              <div className="position-label">

                <strong>
                  DEF
                </strong>

                <span>
                  DEFENDERS
                </span>

              </div>

              <div className="position-bar">

                <div
                  style={{
                    width: `${
                      (defenders /
                        players.length) *
                      100
                    }%`,
                  }}
                />

              </div>

              <strong className="position-number">
                {defenders}
              </strong>

            </div>


            {/* MIDFIELDERS */}

            <div className="position-row">

              <div className="position-label">

                <strong>
                  MID
                </strong>

                <span>
                  MIDFIELDERS
                </span>

              </div>

              <div className="position-bar">

                <div
                  style={{
                    width: `${
                      (midfielders /
                        players.length) *
                      100
                    }%`,
                  }}
                />

              </div>

              <strong className="position-number">
                {midfielders}
              </strong>

            </div>


            {/* FORWARDS */}

            <div className="position-row">

              <div className="position-label">

                <strong>
                  FWD
                </strong>

                <span>
                  FORWARDS
                </span>

              </div>

              <div className="position-bar">

                <div
                  style={{
                    width: `${
                      (forwards /
                        players.length) *
                      100
                    }%`,
                  }}
                />

              </div>

              <strong className="position-number">
                {forwards}
              </strong>

            </div>

          </div>

        </div>


        {/* BOTTOM STATS */}

        <div className="stats-footer">

          <div>

            <span>
              AVERAGE YEAR
            </span>

            <strong>
              {averageYear.toFixed(1)}
            </strong>

          </div>


          <div>

            <span>
              GOALKEEPERS
            </span>

            <strong>
              {goalkeepers}
            </strong>

          </div>


          <div>

            <span>
              FIELD PLAYERS
            </span>

            <strong>
              {fieldPlayers}
            </strong>

          </div>


          <div>

            <span>
              TEAM
            </span>

            <strong>
              CUS
            </strong>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* ADMIN */}
      {/* ================================================= */}

      <section
        id="admin"
        className="admin-section"
      >

        <AdminPanel
          players={players}
        />

      </section>


      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="footer">

        <div className="footer-logo">

          <span>
            CONCORDIA
          </span>

          <strong>
            SOCCER
          </strong>

        </div>

        <p>
          CONCORDIA STINGERS • SOCCER
        </p>

        <span className="footer-copy">
          BUILT TO COMPETE.
        </span>

      </footer>

    </div>
  );
}

export default App;