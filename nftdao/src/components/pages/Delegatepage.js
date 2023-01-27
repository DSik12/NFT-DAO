import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import ModelViewer from "../threeD/Modelrenderer";
import { Navbar } from "../shared/Navbar/Navbar";

import "./delegatePage.css";

export const Delegatepage = () => {
  //   const navigate = useHistory();
  const [Address, setAddress] = useState("");
  const [Ether, setEther] = useState(0);
  const [Description, setDescription] = useState("");
  //   const [Data, setData] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleAddress = async (e) => {
    e.preventDefault();
    setAddress(e.target.value);
    console.log(Address);
  };

  const handleEther = (e) => {
    e.preventDefault();
    setEther(e.target.value);
  };

  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  };
  //    const encodeFunctionCall = treasuryContract.interface.encodeFunctionData("withdrawFunds", [
  //     Address,
  //     ethers.utils.parseEther(Ether, "ether"),
  //    ]);

  //    const tx = await governanceContract.propose([treasuryAddress], [0], [encodeFunctionCall], Description);
  //    const resultTxn = await tx.wait();
  //    const proposeTx = { hash: resultTxn.transactionHash };

  //    fetch(`${url}create`, {
  //     method: "POST",
  //     body: JSON.stringify(proposeTx),
  //     headers: {
  //      "Content-Type": "application/json",
  //     },
  //    })
  //     .then((res) => res.text())
  //     .then((data) => setData(data));
  //    navigate("/");
  //   } catch (error) {
  //    console.error(error);
  //    setLoading(false);
  //   }
  //  };

  return (
    <>
    <Navbar />
      <div className="formTitle">
      <h1>
      <span>DELE</span>GATE <span>ADDRESS</span>
      </h1>
      </div>
      <div className="detailsBox" >
        <div className='proposal'>
          <div className="formProposal">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label onChange={handleAddress}>Address to Delegate</label>
                <input
                  placeholder="Receiver address"
                  className="form-control"
                  style={{
                    borderColor: "#2d2d2d",
                    backgroundColor: "light-blue",
                    
                  }}
                  value={Address}
                  onChange={handleAddress}
                  required={true}
                />
              </div>
              {!Loading ? (
                <div>
                  <button className="btn btn-dark btn-lg btn-block" style={{ background: "radial-gradient(523px at 7.1% 19.3%, rgb(147, 15, 255) 2%, rgb(5, 49, 255) 100.7%)" }}>Delegate</button>
                </div>
              ) : (
                <p></p>
              )}
            </form>
            {/* <p>{Data}</p> */}
          </div>
        </div>
        <div id="threedcomp">
          <ModelViewer scale="0.09" modelPath={"minecraft4.glb"} />
        </div>
      </div>
    </>
  );
};


export default Delegatepage;