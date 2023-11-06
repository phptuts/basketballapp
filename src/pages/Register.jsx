import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onSubmit() {
    const registerFormObj = { email, password };
    console.log(registerFormObj);
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
