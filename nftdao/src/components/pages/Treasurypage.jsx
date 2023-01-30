import React , { useState } from 'react'
import {Navbar} from '../shared/Navbar/Navbar'
import ModelViewer from "../threeD/Modelrenderer";
import Web3 from 'web3';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";

import TreasuryJson from '../utils/Treasury.json'
import AddressJson from '../utils/Address.json'

import './treasuryPage.css'

export const Treasurypage = () => {
  const [treasuryAmount, setTreasuryAmount] = useState(0)
  const [addAmount, setaddAmount] = useState(0);
  const [open, setOpen] = React.useState(false);

  const history = useHistory();

  function navigateToRoute(route) {
    history.push(route);
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log('closed')
    navigateToRoute('/Home')
    setOpen(false);
    setaddAmount(0)
  }
  
  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: '#83ed84',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius : '15px',
    p: 4,
  };

  const titleStyle = {
    fontWeight: 600,
    fontSize: '1.5rem',
    color: 'black'
  }

  var web3 = new Web3("http://127.0.0.1:8545/");
  // console.log('Treasury abi', TreasuryJson['abi'])
  var myContract = new web3.eth.Contract(TreasuryJson['abi'], AddressJson['treasuryAddress'], {
    from: AddressJson['userAddress'], // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  });

  const getTreasuryBalance = () => {
    myContract.methods.totalFunds().call().then(res => {
      console.log('Treasury Balance', res)
      var ethBalance = web3.utils.fromWei(res,'ether')
      setTreasuryAmount(ethBalance)
    })
  }
  
  getTreasuryBalance() ;
  // using the promise
  const sendTransaction = () => {
    web3.eth.sendTransaction({
      from: AddressJson['userAddress2'],
      to: AddressJson['treasuryAddress'],
      value: addAmount
    })
    .then(function(receipt){
      console.log('send money ',receipt)
      getTreasuryBalance()
      web3.eth.getBalance(AddressJson['userAddress2']).then(res => {
        console.log('the remainder balance', res)
      })
      handleOpen()
    });
  }
  
  const handleAddAmount = async (e) => {
    e.preventDefault();
    setaddAmount(e.target.value);
    console.log(addAmount);
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
            <form >
              <div className="form-group">
                <label >Amount in Treasury (Eth)</label>
                <span
                  className="form-control"
                  style={{
                    borderColor: "#2d2d2d",
                    backgroundColor: "#f5f5f5",
                    
                  }}> {treasuryAmount} </span>
              </div>
              <div className="form-group">
                <label>Add to Treasury</label>
                <input
                  placeholder="Enter Amount in Wei"
                  className="form-control"
                  style={{
                    borderColor: "#2d2d2d",
                    backgroundColor: "light-blue",
                    
                  }}
                  onChange={handleAddAmount}
                  required={true}
                />
              </div>
              
                <div>
                  <button className="btn btn-dark btn-lg btn-block" onClick={() => sendTransaction()}
                  style={{ background: "radial-gradient(523px at 7.1% 19.3%, rgb(147, 15, 255) 2%, rgb(5, 49, 255) 100.7%)" }}>
                      Transact</button>
                </div>
             
            </form>
            {/* <p>{Data}</p> */}
          </div>
        </div>
        <div id="threedcomp">
          <ModelViewer scale="0.09" modelPath={"minecraft4.glb"} />
        </div>
      </div>
      
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          <Typography sx={titleStyle} id="modalText" variant="h6" component="h2">
            Yayy!! Transaction Successful!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The Eth has been added to the Treasury!
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Treasurypage
