import { createContext, useState } from "react";

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [updatedGame, setUpdateGame] = useState(null);
  const ws = new WebSocket(import.meta.env.VITE_WEB_SOCKET_URL);
  ws.onopen = function () {
    console.log("open connection");
  };
  ws.onmessage = function (ev) {
    setUpdateGame(JSON.parse(ev.data));
  };
  return (
    <GameContext.Provider value={updatedGame}>{children}</GameContext.Provider>
  );
};

export default GameProvider;
