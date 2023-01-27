import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./Create.css";

export const Create = () => {
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
      <div className="formTitle">
      <h1>
      <span>CRE</span>ATE <span>PROPOSAL</span>
    </h1>
      </div>
      <div className='proposal'>
        <div className="formProposal">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label onChange={handleAddress}>To</label>
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
            <div className="form-group">
              <label>Amount</label>
              <input
                placeholder="Amount in Ether"
                className="form-control"
                style={{
                  borderColor: "#2d2d2d",
                  backgroundColor: "light-blue",
                }}
                onChange={handleEther}
                value={Ether}
                required={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Description</label>
              <textarea
                id="message"
                rows="6"
                placeholder="   Write the description for the proposal"
                value={Description}
                style={{ borderColor: "#2d2d2d" }}
                onChange={handleDescription}
                required={true}
              ></textarea>
            </div>

            {!Loading ? (
              <div>
                <button className="btn btn-dark btn-lg btn-block" style={{ background: "radial-gradient(523px at 7.1% 19.3%, rgb(147, 15, 255) 2%, rgb(5, 49, 255) 100.7%)" }}>Create</button>
              </div>
            ) : (
              <p></p>
            )}
          </form>
          {/* <p>{Data}</p> */}
        </div>
      </div>
    </>
  );
};
