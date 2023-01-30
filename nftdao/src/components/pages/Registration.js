import { SignNavBar } from "../shared/SignNavBar/SignNavBar.js";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import Fetch from "../../config/useFetch.js";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const history2 = useHistory();

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("UserEmail", JSON.stringify(email));
      localStorage.setItem("UserPassword", JSON.stringify(password));
      // IPFS LOGIC ADD HERE {[EMAIL,PASSWORD]}
      //{[name, email, password]}
      const registerdata = {
        name: name,
        email: email,
        password: password,
      };
      const requestOptions = {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerdata),
      };
      fetch("http://localhost:8080/register", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
      history2.push("/Login");
    }
  }

  function navigateToLogin() {
    history2.push("/Login");
  }

  return (
    <>
      <div>
        <SignNavBar />
      </div>
      <div
        style={{
          margin: "150px 900px 150px 70px",
          backgroundColor: "rgba(25, 0, 155, 0.3)",
          padding: "20px",
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <h3 style={{ color: "white" }}>Register</h3>
          <div className="form-group">
            <label style={{ color: "white" }}>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              name="name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ color: "white" }}>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ color: "white" }}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button
            style={{
              background:
                "radial-gradient(523px at 7.1% 19.3%, rgb(147, 15, 255) 2%, rgb(5, 49, 255) 100.7%)",
            }}
            type="submit"
            className="btn btn-dark btn-lg btn-block"
          >
            Register
          </button>
          <p
            style={{ color: "white" }}
            onClick={navigateToLogin}
            className="forgot-password text-right"
          >
            Already registered log in?
          </p>
          {flag && (
            <Alert color="primary" variant="danger">
              I got it you are in hurry! But every Field is important!
            </Alert>
          )}
        </form>
      </div>
    </>
  );
}

export default Registration;
