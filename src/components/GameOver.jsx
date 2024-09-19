export default function GameOver({ winner, onRestart }) {
  const label = winner ? <p>{winner} won!</p> : <p>It is a draw </p>;
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {label}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
