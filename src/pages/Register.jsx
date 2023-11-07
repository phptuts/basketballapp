import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit() {
    const registerFormObj = { email, password };
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(registerFormObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 201) {
      setRegisterSuccess(true);
      console.log("registered user!");
    }
  }

  if (registerSuccess) {
    return (
      <>
        <div className="row">
          <div className="col">
            <h1>Register</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div class="alert alert-success" role="alert">
              Successfully Register!!! Please{" "}
              <NavLink to="/login">login</NavLink>.
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={onEmailChange}
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
            type="password"
            value={password}
            id="inputPassword5"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button onClick={onSubmit} className="btn btn-primary w-100">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
