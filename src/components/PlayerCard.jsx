function PlayerCard({ player }) {
  return (
    <div className="fifa-card">

      <div className="card-glow"></div>

      <div className="card-header">
        <div className="overall">
          <strong>{player.number || "—"}</strong>
          <span>{player.position}</span>
        </div>

        <div className="club-mark">
          C
        </div>
      </div>

      <div className="card-player-image">
        <div className="player-silhouette">
          {player.position}
        </div>
      </div>

      <div className="card-name">
        <h2>{player.name}</h2>
      </div>

      <div className="card-line"></div>

      <div className="card-info">

        <div>
          <strong>{player.height}</strong>
          <span>HEIGHT</span>
        </div>

        <div>
          <strong>{player.weight}</strong>
          <span>WEIGHT</span>
        </div>

        <div>
          <strong>YR {player.year}</strong>
          <span>CLASS</span>
        </div>

      </div>

      <div className="card-footer">
        <span>CONCORDIA</span>
        <span>STINGERS</span>
      </div>

    </div>
  );
}

export default PlayerCard;