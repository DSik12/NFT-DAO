import React from "react";
import { Navbar } from "../shared/Navbar/Navbar";
import { Create } from "../shared/Create/Create";
// import Sphere from "../shared/Sphere/Sphere";

const Createpage = () => {
  return (
    <div>
      <Navbar />
      {/* <Sphere/> */}
      <div>
        <Create />
      </div>
    </div>
  );
};

export default Createpage;