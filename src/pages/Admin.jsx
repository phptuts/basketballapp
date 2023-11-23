import { NavLink, useLoaderData } from "react-router-dom";

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
          <ul>
            {response.data.map((g) => {
              return <li key={g.id}>{g.hometeam}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <NavLink to="/admin?page=2">Page 2</NavLink>
          <NavLink to="/admin?page=3">Page 3</NavLink>
        </div>
      </div>
    </>
  );
};

export default Admin;
