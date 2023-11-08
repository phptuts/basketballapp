import React from "react";

const Login = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label for="email" className="form-label">
            Email
          </label>
          <input type="email" id="email" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label for="inputPassword5" className="form-label">
            Password
          </label>
          <input type="password" id="inputPassword5" className="form-control" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
