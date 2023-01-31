import React, { useState } from "react";
import { SignNavBar } from "../shared/SignNavBar/SignNavBar";
import { useHistory } from "react-router-dom";
import "./Login.css";
import ModelViewer from "../threeD/Modelrenderer";
function Login() {
  const history1 = useHistory();
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [home, setHome] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    const logindata = {
      email: emaillog,
      password: passwordlog,
    };
    const requestOptions = {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logindata),
    };
    fetch("http://localhost:8080/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if(data.message == undefined) {
          setHome(true);
        } else{
          history1.push("/Home");
        }
      });
  }

  return (
    <>
      <div>
        <SignNavBar />
      </div>

      <div className="swatch">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="gridStyle1">
        <div
          style={{
            margin: "0px 80px",
            backgroundColor: "rgba(25, 0, 155, 0.5)",
            width: "600px",
          }}
        >
          <form
            onSubmit={handleLogin}
            style={{ margin: "50px", padding: "100px 30px" }}
          >
            <h3 style={{ color: "white" }}>LogIn</h3>
            <div className="form-group">
              <label style={{ color: "white" }}>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label style={{ color: "white" }}>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPasswordlog(event.target.value)}
              />
            </div>

            <button
              style={{
                background:
                  "radial-gradient(circle at 7.5% 24%, rgb(237, 161, 193) 0%, rgb(250, 178, 172) 25.5%, rgb(190, 228, 210) 62.3%, rgb(215, 248, 247) 93.8%)",
              }}
              type="submit"
              className="btn btn-dark btn-lg btn-block"
            >
              Login
            </button>
            {home && (
              <div className="alert alert-danger" role="alert">
                Email or Password is wrong
              </div>
            )}
          </form>
        </div>
        <div id="threedcomp" style={{ width: "640px", height: "640px" }}>
          <ModelViewer scale="0.09" modelPath={"minecraft4.glb"} />
        </div>
      </div>
    </>
  );
}

export default Login;
