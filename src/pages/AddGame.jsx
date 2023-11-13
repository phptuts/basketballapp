import { Form, redirect, useActionData } from "react-router-dom";

/**
 *
 * @param {{request: Request}} param0
 */
export const addGameAction = async ({ request }) => {
  const formdata = await request.formData();
  const json = {
    hometeam: formdata.get("hometeam"),
    awayteam: formdata.get("awayteam"),
    gametime: formdata.get("gametime"),
  };
  const response = await fetch("http://localhost:3000/game", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status === 403) {
    return redirect("/logout");
  }

  if (response.status === 400) {
    const responseJson = await response.json();
    return responseJson.errors;
  }

  const gameJson = await response.json();

  return redirect(`/game/${gameJson.data.id}`);
};

const AddGame = () => {
  const formErrors = useActionData();
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Add Game</h1>
        </div>
      </div>
      <Form method="POST">
        <div className="row">
          <div className="col-6">
            <label htmlFor="hometeam" className="form-label">
              Home Team
            </label>
            <input
              name="hometeam"
              type="text"
              id="hometeam"
              className={
                !formErrors?.hometeam
                  ? "form-control"
                  : "form-control is-invalid"
              }
            />
            {formErrors?.hometeam && (
              <div class="invalid-feedback">{formErrors.hometeam}</div>
            )}
          </div>
          <div className="col-6">
            <label htmlFor="awayteam" className="form-label">
              Away Team
            </label>
            <input
              name="awayteam"
              type="text"
              id="awayteam"
              className={
                !formErrors?.awayteam
                  ? "form-control"
                  : "form-control is-invalid"
              }
            />
            {formErrors?.awayteam && (
              <div class="invalid-feedback">{formErrors.awayteam}</div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="gametime" className="form-label">
              Game Time
            </label>
            <input
              name="gametime"
              className={
                !formErrors?.gametime
                  ? "form-control"
                  : "form-control is-invalid"
              }
              type="text"
              id="gametime"
            />
            {formErrors?.gametime && (
              <div class="invalid-feedback">{formErrors.gametime}</div>
            )}
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col">
            <button type="submit" className="btn btn-success w-100">
              Add Game
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AddGame;
