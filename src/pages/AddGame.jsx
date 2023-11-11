import { Form } from "react-router-dom";

const AddGame = () => {
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
              className="form-control"
              type="text"
              id="hometeam"
            />
          </div>
          <div className="col-6">
            <label htmlFor="awayteam" className="form-label">
              Away Team
            </label>
            <input
              name="awayteam"
              className="form-control"
              type="text"
              id="awayteam"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="gametime" className="form-label">
              Game Time
            </label>
            <input
              name="gametime"
              className="form-control"
              type="text"
              id="gametime"
            />
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
