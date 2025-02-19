import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HrLogin = () => {
  // used to set states for the input fields...
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorname, setErrorname] = useState("");
  const [passerror, setpasserror] = useState("");

  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var passw = /^[A-Za-z]\w{7,14}$/;
  // used useNavigate Hook for condectional rendering ....
  const navigate = useNavigate();

  // after submiting the form .....
  const Loginfunction = (e) => {
    e.preventDefault(); // prevent the screen from reRendering the component after hiting the submit button ....

    if (username === "" && password === "") {
      setErrorname("Enter your name---Required");
      setpasserror("Enter the password");
    } else if (!regName.test(username) && !passw.test(password)) {
      setErrorname("invalid name");
      setpasserror("Check the password");
    }

    //*if login is success only then it redirects to the hrDashBord view page else throws an error .....
    if (username === "admin" && password === "admin") {
      console.log("Logged IN");
      navigate("/hrdashboardviewdjefnjdbi");
      // error message
    } else {
      console.log("Logged failed");
    }

    // afetr login we set the state value again empty ....
    setPassword("");
    setUsername("");
  };
  return (
    <div className="container mt-5 pt-5">
      <div
        className="col-8 col-lg-10"
        style={{ margin: "130px", marginLeft: "350px" }}
      >
        <h2 className="w-50" style={{ marginLeft: "150px" }}>
          Admin Login
        </h2>
        <form onSubmit={Loginfunction}>
          <input
            type="text"
            name="username"
            placeholder="Hr Login"
            className="form-control my-3 w-50"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p style={{ color: "red" }}>{errorname}</p>
          <input
            type="text"
            name="password"
            placeholder="password"
            className="form-control my-3 w-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: "red" }}>{passerror}</p>
          <input
            type="submit"
            style={{
              marginLeft: "150px",
              width: "150px",
              height: "40px",
              borderRadius: "5PX",
              color: "red",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default HrLogin;
