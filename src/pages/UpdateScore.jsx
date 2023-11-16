import { useContext, useEffect, useState } from "react";
import {
  redirect,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import { toast } from "react-toastify";

export const gameLoader = async ({ params }) => {
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
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [formData, setSetFormData] = useState({
    minutes: "",
    seconds: "",
    quarter: "",
    hometeamScore: "",
    awayteamScore: "",
  });
  const [formErrors, setFormErrors] = useState({});

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

  async function onSubmit() {
    setFormErrors({});
    const url = `http://localhost:3000/game/${gameId}/updatescore`;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      toast("Game updated!");
    }

    if (response.status === 400) {
      const json = await response.json();
      setFormErrors(json.errors);
    }
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
            className={
              !formErrors?.hometeamScore
                ? "form-control"
                : "form-control is-invalid"
            }
          />
          {formErrors?.hometeamScore && (
            <div class="invalid-feedback">{formErrors.hometeamScore}</div>
          )}
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
            className={
              !formErrors?.awayteamScore
                ? "form-control"
                : "form-control is-invalid"
            }
          />
          {formErrors?.awayteamScore && (
            <div class="invalid-feedback">{formErrors.awayteamScore}</div>
          )}
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
            className={
              !formErrors?.quarter ? "form-control" : "form-control is-invalid"
            }
          />
          {formErrors?.quarter && (
            <div class="invalid-feedback">{formErrors.quarter}</div>
          )}
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
            className={
              !formErrors?.minutes ? "form-control" : "form-control is-invalid"
            }
          />
          {formErrors?.minutes && (
            <div class="invalid-feedback">{formErrors.minutes}</div>
          )}
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
            className={
              !formErrors?.seconds ? "form-control" : "form-control is-invalid"
            }
          />
          {formErrors?.seconds && (
            <div class="invalid-feedback">{formErrors.seconds}</div>
          )}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button onClick={onSubmit} className="btn btn-primary w-100">
            Update Score
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateScore;
