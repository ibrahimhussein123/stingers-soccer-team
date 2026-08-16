import { useState } from "react";

function AdminPanel({ players }) {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const [editedPlayer, setEditedPlayer] = useState(null);

  const [saved, setSaved] = useState(false);

  const openEditor = (player) => {
    setSelectedPlayer(player);
    setEditedPlayer({ ...player });
    setSaved(false);
  };

  const closeEditor = () => {
    setSelectedPlayer(null);
    setEditedPlayer(null);
  };

  const handleChange = (field, value) => {
    setEditedPlayer((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const savePlayer = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <section className="admin-panel">

      {/* HEADER */}

      <div className="admin-header">

        <div>

          <p className="eyebrow">
            TEAM MANAGEMENT
          </p>

          <h1>
            COACH
            <span>MODE.</span>
          </h1>

          <p className="admin-description">
            Manage player information, positions,
            ratings and squad details.
          </p>

        </div>

        <div className="admin-status">

          <span className="status-dot"></span>

          ADMIN ACCESS

        </div>

      </div>


      {/* PLAYER LIST */}

      {!selectedPlayer && (

        <div className="admin-content">

          <div className="admin-list-header">

            <span>
              PLAYER
            </span>

            <span>
              POS
            </span>

            <span>
              YEAR
            </span>

            <span>
              ACTION
            </span>

          </div>


          <div className="admin-player-list">

            {players.map((player) => (

              <div
                className="admin-player-row"
                key={player.id}
              >

                <div className="admin-player-name">

                  <div className="admin-player-number">
                    {player.number || "—"}
                  </div>

                  <div>

                    <strong>
                      {player.name}
                    </strong>

                    <span>
                      {player.course}
                    </span>

                  </div>

                </div>


                <div className="admin-position">
                  {player.position}
                </div>


                <div className="admin-year">
                  YEAR {player.year}
                </div>


                <button
                  className="edit-player-btn"
                  onClick={() =>
                    openEditor(player)
                  }
                >
                  EDIT
                  <span>→</span>
                </button>

              </div>

            ))}

          </div>

        </div>

      )}


      {/* EDITOR */}

      {selectedPlayer && editedPlayer && (

        <div className="player-editor">

          <button
            className="back-admin"
            onClick={closeEditor}
          >
            ← BACK TO PLAYERS
          </button>


          <div className="editor-header">

            <div>

              <p className="eyebrow">
                EDIT PLAYER
              </p>

              <h2>
                {editedPlayer.name}
              </h2>

            </div>

            {saved && (

              <div className="save-success">
                ✓ CHANGES SAVED
              </div>

            )}

          </div>


          <div className="editor-grid">

            {/* BASIC INFORMATION */}

            <div className="editor-card">

              <div className="editor-card-title">
                BASIC INFORMATION
              </div>


              <div className="form-grid">

                <div className="form-group">

                  <label>
                    PLAYER NAME
                  </label>

                  <input
                    value={editedPlayer.name}
                    onChange={(e) =>
                      handleChange(
                        "name",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="form-group">

                  <label>
                    JERSEY NUMBER
                  </label>

                  <input
                    type="number"
                    value={
                      editedPlayer.number || ""
                    }
                    onChange={(e) =>
                      handleChange(
                        "number",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="form-group">

                  <label>
                    POSITION
                  </label>

                  <select
                    value={
                      editedPlayer.position
                    }
                    onChange={(e) =>
                      handleChange(
                        "position",
                        e.target.value
                      )
                    }
                  >

                    <option value="GK">
                      GK — Goalkeeper
                    </option>

                    <option value="D">
                      D — Defender
                    </option>

                    <option value="M">
                      M — Midfielder
                    </option>

                    <option value="F">
                      F — Forward
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label>
                    YEAR
                  </label>

                  <select
                    value={editedPlayer.year}
                    onChange={(e) =>
                      handleChange(
                        "year",
                        Number(e.target.value)
                      )
                    }
                  >

                    <option value={1}>
                      YEAR 1
                    </option>

                    <option value={2}>
                      YEAR 2
                    </option>

                    <option value={3}>
                      YEAR 3
                    </option>

                    <option value={4}>
                      YEAR 4
                    </option>

                  </select>

                </div>

              </div>

            </div>


            {/* PHYSICAL */}

            <div className="editor-card">

              <div className="editor-card-title">
                PHYSICAL PROFILE
              </div>


              <div className="form-grid">

                <div className="form-group">

                  <label>
                    HEIGHT
                  </label>

                  <input
                    value={editedPlayer.height}
                    onChange={(e) =>
                      handleChange(
                        "height",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="form-group">

                  <label>
                    WEIGHT
                  </label>

                  <input
                    type="number"
                    value={editedPlayer.weight}
                    onChange={(e) =>
                      handleChange(
                        "weight",
                        Number(e.target.value)
                      )
                    }
                  />

                </div>


                <div className="form-group">

                  <label>
                    HOMETOWN
                  </label>

                  <input
                    value={editedPlayer.hometown}
                    onChange={(e) =>
                      handleChange(
                        "hometown",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="form-group">

                  <label>
                    PREVIOUS TEAM
                  </label>

                  <input
                    value={
                      editedPlayer.lastTeam || ""
                    }
                    onChange={(e) =>
                      handleChange(
                        "lastTeam",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

            </div>


            {/* RATINGS */}

            <div className="editor-card ratings-editor">

              <div className="editor-card-title">
                PLAYER ATTRIBUTES
              </div>


              <div className="rating-editor-grid">

                {[
                  ["pace", "PACE"],
                  ["shooting", "SHOOTING"],
                  ["passing", "PASSING"],
                  ["dribbling", "DRIBBLING"],
                  ["defending", "DEFENDING"],
                  ["physical", "PHYSICAL"],
                ].map(([field, label]) => (

                  <div
                    className="rating-editor"
                    key={field}
                  >

                    <div>

                      <span>
                        {label}
                      </span>

                      <strong>
                        {editedPlayer[field] || 0}
                      </strong>

                    </div>

                    <input
                      type="range"
                      min="1"
                      max="99"
                      value={
                        editedPlayer[field] || 0
                      }
                      onChange={(e) =>
                        handleChange(
                          field,
                          Number(e.target.value)
                        )
                      }
                    />

                  </div>

                ))}

              </div>

            </div>


            {/* ACADEMIC */}

            <div className="editor-card">

              <div className="editor-card-title">
                ACADEMIC INFORMATION
              </div>


              <div className="form-group">

                <label>
                  PROGRAM
                </label>

                <input
                  value={editedPlayer.course}
                  onChange={(e) =>
                    handleChange(
                      "course",
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

          </div>


          {/* ACTIONS */}

          <div className="editor-actions">

            <button
              className="cancel-btn"
              onClick={closeEditor}
            >
              CANCEL
            </button>

            <button
              className="save-player-btn"
              onClick={savePlayer}
            >
              SAVE PLAYER
              <span>✓</span>
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default AdminPanel;