import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HrLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorname, setErrorname] = useState("");
  const [passerror, setPasserror] = useState("");

  const navigate = useNavigate();

  // Login Validation & Redirect
  const Loginfunction = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorname(!username ? "Enter your name - Required" : "");
      setPasserror(!password ? "Enter the password" : "");
      return;
    }

    if (username === "admin" && password === "admin") {
      localStorage.setItem("isAuthenticated", "true"); // ✅ Set authentication flag
      navigate("/hrdashboardviewdjefnjdbi"); // ✅ Redirect to dashboard
    } else {
      setErrorname("Invalid username or password");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "url('https://source.unsplash.com/1600x900/?office') center/cover",
      }}
    >
      <div className="p-5 shadow rounded bg-white" style={{ width: "350px" }}>
        <h2 className="text-center mb-4 text-success fw-bold">Admin Login</h2>
        <form onSubmit={Loginfunction}>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="text-danger small">{errorname}</p>
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-danger small">{passerror}</p>
          </div>
          <button className="btn btn-success w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default HrLogin;
