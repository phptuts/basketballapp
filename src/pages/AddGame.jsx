import { redirect } from "react-router-dom";
import GameForm from "../components/GameForm";
import { submitGameToServer } from "../helpers/game.helper";

/**
 *
 * @param {{request: Request}} param0
 */
export const addGameAction = async ({ request }) => {
  return await submitGameToServer(
    request,
    "http://localhost:3000/game",
    "POST"
  );
};

const AddGame = () => {
  return <GameForm title="Add Game" />;
};

export default AddGame;
