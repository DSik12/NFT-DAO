import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import {Navbar} from '../shared/Navbar/Navbar'
import { useHistory } from "react-router-dom";
function Login() {

  const history1 = useHistory();
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function navigateToHome(){
    history1.push('/Home');
  }

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("UserPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("UserEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
      history1.push('/Home');
    }
  }

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div style={{margin:"150px 300px"}}>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        {navigateToHome}
      )}
    </div>
    </>
  );
}

export default Login;