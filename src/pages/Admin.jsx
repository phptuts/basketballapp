import { NavLink, useLoaderData } from "react-router-dom";
import Pagination from "../components/Pagination";

/**
 * @param {{request: Request}} param0
 */
export const adminLoader = async ({ request }) => {
  const urlString = request.url;
  const url = new URL(urlString);
  const pageParam = url.searchParams.get("page");
  let page = pageParam ? +pageParam : 1;
  page = page >= 1 ? page : 1;

  const userId = +localStorage.getItem("userId");
  const queryParams = { user_id: userId, page };
  const fetchUrl =
    "http://localhost:3000/game?" + new URLSearchParams(queryParams);

  const response = await fetch(fetchUrl);

  return await response.json();
};

const Admin = () => {
  const response = useLoaderData();
  console.log(response, "response");
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Admin Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Game Time</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {response.data.map((g) => {
                return (
                  <tr key={g.id}>
                    <td>{g.id}</td>
                    <td>{g.hometeam}</td>
                    <td>{g.awayteam}</td>
                    <td>{g.gametime}</td>
                    <td>
                      <NavLink
                        to={`/admin/game/${g.id}`}
                        className="btn btn-success"
                      >
                        Edit Game
                      </NavLink>
                    </td>
                    <td>
                      <NavLink
                        to={`/admin/game/${g.id}/updatescore`}
                        className="btn btn-info"
                      >
                        Update Score
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination meta={response.meta} />
    </>
  );
};

export default Admin;
