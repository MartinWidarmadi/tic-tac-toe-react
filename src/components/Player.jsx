import { useState } from "react";

export default function Player({ name, symbol, isActive, onPlayerNameChange }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onPlayerNameChange(symbol, playerName);
    }
  }

  function handleNameChange(event) {
    setPlayerName(() => event.target.value);
  }

  let playerDisplayName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerDisplayName = <input type="text" required value={playerName} onChange={handleNameChange} />;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerDisplayName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
