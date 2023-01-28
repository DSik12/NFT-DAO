import React , { useState } from 'react'
import {Navbar} from '../shared/Navbar/Navbar'
import ModelViewer from "../threeD/Modelrenderer";

import './treasuryPage.css'

export const Treasurypage = () => {

  const [Address, setAddress] = useState("");
  const [treasuryAmount, setTreasuryAmount] = useState(2.01)
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
  return (
    <div >
      <Navbar />

      <div className="formTitle">
      <h1>
      <span>TREA</span>SURY 
      </h1>
      </div>
      <div className="detailsBox" >
        <div className='proposal'>
          <div className="formProposal">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label onChange={handleAddress}>Amount in Treasury (Eth)</label>
                <input
                  className="form-control"
                  style={{
                    borderColor: "#2d2d2d",
                    backgroundColor: "light-blue",
                    
                  }}
                  value={treasuryAmount}
                  disabled
                />
              </div>
              <div className="form-group">
                <label onChange={handleAddress}>Add to Treasury</label>
                <input
                  placeholder="Enter Amount"
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

      {/* <div className='treasuryBox'>
        <div className='treasuryText'>
        The total amount in the DAO's Treasury is...
        </div>
        <div className='treasuryAmount'>
          5.0525 Eth
        </div>
      </div>

      <div className='amountBox'>
        <div className='amountText'>
          Enter the amount to be added to Treasury
        </div>
        <input className ="amountEntry"  />
        <div className='ethText'>
          Eth
        </div>
      </div>

      <div className='transactButton'>
        Transact
      </div> */}
    </div>
  )
}

export default Treasurypage
