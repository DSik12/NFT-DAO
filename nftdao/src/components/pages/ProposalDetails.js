import React, { useState } from "react";
// import Details from "../components/Details";
import { Navbar } from "../shared/Navbar/Navbar";
import Vote from "../shared/Vote/Vote";
import { useParams } from "react-router-dom";
// import { url } from "../utils/Connectors";
// import axios from "axios";

const Detailspage = () => {
 const { id } = useParams();
 const [data, setdata] = useState({});

//  React.useEffect(() => {
//   loadData();
//  }, []);

//  const loadData = async () => {
//   try {
//    axios.get(`${url}views/${id}`).then((res) => setdata(res.data));
//   } catch (error) {
//    console.error(error.message);
//   }
//  };

 return (
  <div>
   <Navbar />
   <div>
    <Vote/>
   </div>

   {/* <div className="flex flex-col md:flex-row mx-auto justify-center">
    <div className="mx-5 md:mx-5">
     <Details data={data} />
     <Vote data={data} />
    </div>
    <div className="mb-10">
     <Sidetabs data={data} />
    </div>
   </div> */}
  </div>
 );
};

export default Detailspage;