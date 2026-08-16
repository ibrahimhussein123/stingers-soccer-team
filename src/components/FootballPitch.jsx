import { useState } from "react";

function FootballPitch({ players }) {
  const formations = {
    "4-3-3": [
      { x: 50, y: 88, role: "GK" },

      { x: 18, y: 68, role: "LB" },
      { x: 39, y: 72, role: "CB" },
      { x: 61, y: 72, role: "CB" },
      { x: 82, y: 68, role: "RB" },

      { x: 25, y: 48, role: "CM" },
      { x: 50, y: 43, role: "CM" },
      { x: 75, y: 48, role: "CM" },

      { x: 18, y: 20, role: "LW" },
      { x: 50, y: 14, role: "ST" },
      { x: 82, y: 20, role: "RW" },
    ],

    "4-4-2": [
      { x: 50, y: 88, role: "GK" },

      { x: 18, y: 68, role: "LB" },
      { x: 39, y: 72, role: "CB" },
      { x: 61, y: 72, role: "CB" },
      { x: 82, y: 68, role: "RB" },

      { x: 18, y: 45, role: "LM" },
      { x: 39, y: 48, role: "CM" },
      { x: 61, y: 48, role: "CM" },
      { x: 82, y: 45, role: "RM" },

      { x: 38, y: 18, role: "ST" },
      { x: 62, y: 18, role: "ST" },
    ],

    "3-4-3": [
      { x: 50, y: 88, role: "GK" },

      { x: 25, y: 70, role: "CB" },
      { x: 50, y: 74, role: "CB" },
      { x: 75, y: 70, role: "CB" },

      { x: 15, y: 48, role: "LM" },
      { x: 38, y: 50, role: "CM" },
      { x: 62, y: 50, role: "CM" },
      { x: 85, y: 48, role: "RM" },

      { x: 20, y: 18, role: "LW" },
      { x: 50, y: 13, role: "ST" },
      { x: 80, y: 18, role: "RW" },
    ],
  };

  const [formation, setFormation] = useState("4-3-3");

  const [lineup, setLineup] = useState(
    players.slice(0, 11)
  );

  const [bench, setBench] = useState(
    players.slice(11)
  );

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const [draggedPlayer, setDraggedPlayer] = useState(null);

  const positions = formations[formation];

  /* ============================= */
  /* DRAG START */
  /* ============================= */

  const handleDragStart = (player) => {
    setDraggedPlayer(player);
  };

  /* ============================= */
  /* DROP ON PITCH */
  /* ============================= */

  const handleDrop = (index) => {
    if (!draggedPlayer) return;

    const currentPlayer = lineup[index];

    const fromLineup = lineup.some(
      (player) => player.id === draggedPlayer.id
    );

    if (fromLineup) {
      const oldIndex = lineup.findIndex(
        (player) => player.id === draggedPlayer.id
      );

      const newLineup = [...lineup];

      newLineup[oldIndex] = currentPlayer;
      newLineup[index] = draggedPlayer;

      setLineup(newLineup);
    } else {
      const newLineup = [...lineup];

      newLineup[index] = draggedPlayer;

      setLineup(newLineup);

      setBench(
        bench.filter(
          (player) => player.id !== draggedPlayer.id
        )
      );

      setBench((oldBench) => [
        ...oldBench,
        currentPlayer,
      ]);
    }

    setDraggedPlayer(null);
  };

  /* ============================= */
  /* REMOVE FROM XI */
  /* ============================= */

  const removeFromLineup = (index) => {
    const player = lineup[index];

    setBench((oldBench) => [
      ...oldBench,
      player,
    ]);

    setLineup((oldLineup) => {
      const copy = [...oldLineup];

      copy[index] = null;

      return copy;
    });
  };

  /* ============================= */
  /* ADD FROM BENCH */
  /* ============================= */

  const addToLineup = (player) => {
    const emptyIndex = lineup.findIndex(
      (item) => item === null
    );

    if (emptyIndex === -1) {
      alert("Starting XI is full.");
      return;
    }

    const newLineup = [...lineup];

    newLineup[emptyIndex] = player;

    setLineup(newLineup);

    setBench(
      bench.filter(
        (item) => item.id !== player.id
      )
    );
  };

  /* ============================= */
  /* RENDER */
  /* ============================= */

  return (
    <section className="fifa-builder">

      {/* HEADER */}

      <div className="builder-header">

        <div>
          <p className="eyebrow">
            TEAM MANAGEMENT
          </p>

          <h1>
            SQUAD
            <span>BUILDER.</span>
          </h1>
        </div>

        <div className="formation-control">

          <span>FORMATION</span>

          <select
            value={formation}
            onChange={(e) =>
              setFormation(e.target.value)
            }
          >
            <option value="4-3-3">4-3-3</option>
            <option value="4-4-2">4-4-2</option>
            <option value="3-4-3">3-4-3</option>
          </select>

        </div>

      </div>


      {/* MAIN */}

      <div className="builder-layout">

        {/* PITCH */}

        <div className="pitch-container">

          <div className="pitch">

            {/* PITCH LINES */}

            <div className="pitch-half"></div>

            <div className="center-line"></div>

            <div className="center-circle"></div>

            <div className="center-dot"></div>

            <div className="penalty-top"></div>

            <div className="penalty-bottom"></div>

            <div className="goal-top"></div>

            <div className="goal-bottom"></div>


            {/* PLAYERS */}

            {positions.map((position, index) => {

              const player = lineup[index];

              return (
                <div
                  key={index}

                  className={`pitch-position ${
                    selectedPlayer?.id === player?.id
                      ? "selected-player"
                      : ""
                  }`}

                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                  }}

                  onDragOver={(e) =>
                    e.preventDefault()
                  }

                  onDrop={() =>
                    handleDrop(index)
                  }
                >

                  {player ? (

                    <div
                      className="pitch-player"

                      draggable

                      onDragStart={() =>
                        handleDragStart(player)
                      }

                      onClick={() =>
                        setSelectedPlayer(player)
                      }
                    >

                      <div className="pitch-player-circle">

                        <strong>
                          {player.number || "—"}
                        </strong>

                      </div>

                      <span>
                        {player.name.split(" ")[0]}
                      </span>

                      <small>
                        {position.role}
                      </small>

                      {selectedPlayer?.id === player.id && (

                        <button
                          className="remove-player"
                          onClick={(e) => {
                            e.stopPropagation();

                            removeFromLineup(index);

                            setSelectedPlayer(null);
                          }}
                        >
                          ×
                        </button>

                      )}

                    </div>

                  ) : (

                    <div
                      className="empty-position"
                      onClick={() => {
                        if (selectedPlayer) {
                          handleDrop(index);
                        }
                      }}
                    >
                      +
                      <span>
                        {position.role}
                      </span>
                    </div>

                  )}

                </div>
              );
            })}

          </div>

        </div>


        {/* SIDE PANEL */}

        <div className="squad-sidebar">

          <div className="sidebar-title">

            <div>
              <span>STARTING XI</span>
              <strong>
                {lineup.filter(Boolean).length}/11
              </strong>
            </div>

            <div className="live-indicator">
              LIVE
            </div>

          </div>


          {/* SELECTED PLAYER */}

          {selectedPlayer && (

            <div className="selected-player-panel">

              <div className="selected-player-number">
                {selectedPlayer.number || "—"}
              </div>

              <div>

                <span>
                  {selectedPlayer.position}
                </span>

                <h3>
                  {selectedPlayer.name}
                </h3>

                <small>
                  {selectedPlayer.course}
                </small>

              </div>

            </div>

          )}


          {/* BENCH */}

          <div className="bench-title">

            <span>
              SUBSTITUTES
            </span>

            <strong>
              {bench.length}
            </strong>

          </div>


          <div className="bench-list">

            {bench.map((player) => (

              <div
                key={player.id}

                className="bench-player"

                draggable

                onDragStart={() =>
                  handleDragStart(player)
                }

                onClick={() =>
                  addToLineup(player)
                }
              >

                <div className="bench-number">
                  {player.number || "—"}
                </div>

                <div className="bench-position">
                  {player.position}
                </div>

                <div className="bench-name">

                  <strong>
                    {player.name}
                  </strong>

                  <span>
                    YEAR {player.year}
                  </span>

                </div>

                <div className="bench-add">
                  +
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* BOTTOM BAR */}

      <div className="builder-footer">

        <div className="footer-info">

          <span>
            FORMATION
          </span>

          <strong>
            {formation}
          </strong>

        </div>

        <div className="footer-info">

          <span>
            STARTING XI
          </span>

          <strong>
            {lineup.filter(Boolean).length}
          </strong>

        </div>

        <div className="footer-info">

          <span>
            SUBSTITUTES
          </span>

          <strong>
            {bench.length}
          </strong>

        </div>

        <button className="save-lineup">
          SAVE LINEUP
          <span>→</span>
        </button>

      </div>

    </section>
  );
}

export default FootballPitch;