import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import ModelViewer from "../../threeD/Modelrenderer";
import Web3 from 'web3';
import MyGovernorJson from '../../utils/MyGovernor.json'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";

import AddressJson from '../../utils/Address.json'
import "./Create.css";

export const Create = () => {
  //   const navigate = useHistory();
  const [Address, setAddress] = useState("0x0000000000000000000000000000000000000000");
  const [Ether, setEther] = useState(0);
  const [Description, setDescription] = useState("");
  //   const [Data, setData] = useState("");
  const [Loading, setLoading] = useState(false);

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
  console.log('Treasury abi', MyGovernorJson['abi'])
  var myContract = new web3.eth.Contract(MyGovernorJson['abi'], AddressJson['governorAddress'], {
    from: AddressJson['userAddress'], // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  });

  // var ethInBN = web3.utils.toBN(web3.utils.fromWei(100000000000, 'ether'))
  // console.log('ETH in BN', ethInBN)

  const encodedFunctionCall = web3.eth.abi.encodeFunctionCall({
    name: 'releaseFunds',
    type: 'function',
    inputs: [{
        type: 'address',
        name: '_payee'
    },{
        type: 'uint256',
        name: 'fundsToTransfer'
    }]
  }, [Address, web3.utils.toBN(Ether) ]);

  const checkState = (proposalId) => {
    myContract.methods.state(proposalId).call().then(res => {
      console.log('State is',res)
    })
  }

  const createProposal = () => {
    //treasury address
    myContract.methods.propose([AddressJson['treasuryAddress']],
      [0],
      [encodedFunctionCall],
      Description
    ).send().then(res => {
      console.log('proposal object ', res)

      var proposalId = res.events.ProposalCreated.returnValues[0]
      console.log('Proposal Id', proposalId)
      checkState(proposalId);
      localStorage.setItem('proposalId',proposalId)
      handleOpen();
    }
    )
    localStorage.setItem('description',Description )
  }

  
   

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
      <div className="createDiv">
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

                <div>
                  <button className="btn btn-dark btn-lg btn-block" onClick={() => createProposal()}
                  style={{ background: "radial-gradient(523px at 7.1% 19.3%, rgb(147, 15, 255) 2%, rgb(5, 49, 255) 100.7%)" }}>
                    Create</button>
                </div>
             
            </form>
            {/* <p>{Data}</p> */}
          </div>
        </div>
        <div id="threedcomp" style={{ width: "640px", height: "640px" }}>
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
            Congratulations!! 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The Proposal has been created!
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
