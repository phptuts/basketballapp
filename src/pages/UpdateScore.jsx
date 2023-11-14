import { useContext, useEffect, useState } from "react";
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

export const updateScoreLoader = async ({ params }) => {
  const gameResponse = await fetch(
    `http://localhost:3000/game/${params.gameId}`
  );
  if (gameResponse.status == 404) {
    return redirect("/not-found");
  }
  const gameData = await gameResponse.json();
  return gameData.data;
};

const UpdateScore = () => {
  const gameData = useLoaderData();
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setSetFormData] = useState({
    minutes: "",
    seconds: "",
    quarter: "",
    hometeamScore: "",
    awayteamScore: "",
  });

  useEffect(() => {
    if (!gameData || !userId) return;

    if (+gameData.userId !== +userId) {
      navigate("/logout");
      return;
    }

    setSetFormData({
      minutes: gameData.minutes ?? "",
      seconds: gameData.seconds ?? "",
      quarter: gameData.quarter ?? "",
      hometeamScore: gameData.hometeamScore ?? "",
      awayteamScore: gameData.awayteamScore ?? "",
    });
  }, [gameData, userId]);

  function setSingleFormData(value, property) {
    setSetFormData((prev) => {
      prev[property] = value;
      return { ...prev };
    });
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Update Score</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label htmlFor="hometeamScore" className="form-label">
            Home Team Score
          </label>
          <input
            onChange={(e) => setSingleFormData(e.target.value, "hometeamScore")}
            value={formData.hometeamScore}
            type="number"
            id="hometeamScore"
            className="form-control"
          />
        </div>
        <div className="col-6">
          <label htmlFor="awayteamScore" className="form-label">
            Away Team Score
          </label>
          <input
            onChange={(e) => setSingleFormData(e.target.value, "awayteamScore")}
            type="number"
            value={formData.awayteamScore}
            id="awayteamScore"
            className="form-control"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="quarter" className="form-label">
            Quater
          </label>
          <input
            onChange={(e) => setSingleFormData(e.target.value, "quarter")}
            type="number"
            value={formData.quarter}
            id="quarter"
            className="form-control"
          />
        </div>
        <div className="col">
          <label htmlFor="minutes" className="form-label">
            Minutes
          </label>
          <input
            onChange={(e) => setSingleFormData(e.target.value, "minutes")}
            value={formData.minutes}
            type="number"
            id="minutes"
            className="form-control"
          />
        </div>
        <div className="col">
          <label htmlFor="seconds" className="form-label">
            Seconds
          </label>
          <input
            onChange={(e) => setSingleFormData(e.target.value, "seconds")}
            value={formData.seconds}
            type="number"
            id="seconds"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-primary w-100">Update Score</button>
        </div>
      </div>
    </>
  );
};

export default UpdateScore;
