import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { getGames } from "../helpers/game.helper";
import { useLoaderData } from "react-router-dom";
import Pagination from "../components/Pagination";
import Game from "../components/Game";

/**
 * @param {{request: Request}} param0
 */
export const homeLoader = async ({ request }) => {
  const urlString = request.url;
  const url = new URL(urlString);
  const page = url.searchParams.get("page") ?? 1;
  const search = url.searchParams.get("search");
  const type = url.searchParams.get("type") ?? "all";

  return await getGames(null, page, type, search);
};

const Home = () => {
  const response = useLoaderData();
  return (
    <>
      {response.data.map((g) => {
        return <Game key={g.id} game={g} />;
      })}
      <div className="row">
        <div className="col">
          <Pagination meta={response.meta} />
        </div>
      </div>
    </>
  );
};

export default Home;
