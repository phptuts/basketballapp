import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit() {
    const formObj = { email, password };
    console.log(formObj, "login form");
  }
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="inputPassword5"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button onClick={onSubmit} className="btn btn-primary w-100">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
