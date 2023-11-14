import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const {
    setIsLoggedIn,
    setEmail: setEmailContext,
    setUserId,
  } = useContext(AuthContext);
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  async function onSubmit() {
    setLoginFailed(false);
    const formObj = { email, password };
    console.log(formObj, "login form");
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(formObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      const json = await response.json();
      localStorage.setItem("jwt", json.data.token);
      setEmailContext(json.data.email);
      setUserId(json.data.userId);
      setIsLoggedIn(true);
      navigate("/");
      return;
    }

    if (response.status == 400) {
      const json = await response.json();
      const erorrs = {};
      if (json.errors?.email) {
        erorrs.email = json.errors.email[0];
      }
      if (json.errors?.password) {
        erorrs.password = json.errors.password[0];
      }
      setFormErrors(erorrs);
      return;
    }

    if (response.status === 401) {
      setLoginFailed(true);
      return;
    }
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
            className={
              !formErrors.email ? "form-control" : "form-control is-invalid"
            }
          />
          {formErrors.email && (
            <div class="invalid-feedback">{formErrors.email}</div>
          )}
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
            className={
              !formErrors.password ? "form-control" : "form-control is-invalid"
            }
          />
          {formErrors.password && (
            <div class="invalid-feedback">{formErrors.password}</div>
          )}
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col">
          <button onClick={onSubmit} className="btn btn-primary w-100">
            Login
          </button>
        </div>
      </div>
      {loginFailed && (
        <div className="row">
          <div className="col">
            <div class="alert alert-danger" role="alert">
              Invalid email or password.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
