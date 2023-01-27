import { SignNavBar } from "../shared/SignNavBar/SignNavBar.js";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const history2 = useHistory();

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("UserEmail", JSON.stringify(email));
      localStorage.setItem("UserPassword", JSON.stringify(password));
      setLogin(!login);
      // IPFS LOGIC ADD HERE {[EMAIL,PASSWORD]}
      //{[name, email, password]}
      history2.push('/Login');
    }
  }

  function navigateToLogin(){
    history2.push('/Login');
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <div>
        <SignNavBar />
      </div>
      <div style={{margin:"150px 400px"}}>
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit} >
            <h3 style={{color: "white"}}>Register</h3>
            <div className="form-group">
              <label style={{color: "white"}}>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label style={{color: "white"}}>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label style={{color: "white"}}>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>


            <button type="submit" onSubmit={handleClick} className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <p onClick={navigateToLogin} className="forgot-password text-right">
              Already registered log in?
            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </form>
        ) : (
          {navigateToLogin}
        )}
      </div>
    </>
  );
}

export default Registration;
