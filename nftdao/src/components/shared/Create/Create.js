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
      <div className="formTitle" style={{ borderColor: "#2d2d2d" }}>
        <p>Enter the required details in order to create a proposal</p>
      </div>
      <div className='proposal'>
        <div className="formProposal">
          <form onSubmit={handleSubmit}>
            <div>
              <label onChange={handleAddress}>To</label>
              <input
                placeholder="Receiver address"
                style={{
                  borderColor: "#2d2d2d",
                  backgroundColor: "light-blue",
                  marginLeft: "110px",
                }}
                value={Address}
                onChange={handleAddress}
                required={true}
              />
            </div>
            <div>
              <label>Amount</label>
              <input
                placeholder="Amount in Ether"
                style={{
                  borderColor: "#2d2d2d",
                  backgroundColor: "light-blue",
                  marginLeft: "70px",
                }}
                onChange={handleEther}
                value={Ether}
                required={true}
              />
            </div>
            <div>
              <label htmlFor="message">Description</label>
            </div>
            <div>
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
                <button style={{ borderColor: "#2d2d2d" }}>Create</button>
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
