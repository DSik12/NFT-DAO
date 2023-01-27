import React from "react";
import '../Navbar/Navbar.css'
import { useHistory } from "react-router-dom";
import daoImage from "../../../assets/dao.png";

export const SignNavBar = () => {
    
  const history3 = useHistory();

  function navigateRoute(route) {
    history3.push(route);
  }

  return (
    <div className="Navbar">
      <div className="navTitles">
        <img
          src={daoImage}
          alt="logo"
          height="50px"
          width="50px"
          className="daoLogo"
          onClick={() => navigateRoute("/")}
        ></img>
        <div className="headingText" onClick={() => navigateRoute("/")}>
          Registration
        </div>
        <div className="headingText" onClick={() => navigateRoute("/Login")}>
          LogIn
        </div>
      </div>
    </div>
  );
};
