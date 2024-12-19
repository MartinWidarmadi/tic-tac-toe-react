export default function Log({ gameLog }) {
  return (
    <ol id="log">
      {gameLog.map((log) => (
        <li key={`${log.square.row}-${log.square.col}`}>
          {log.player} select ({log.square.row}, {log.square.col})
        </li>
      ))}
    </ol>
  );
}
