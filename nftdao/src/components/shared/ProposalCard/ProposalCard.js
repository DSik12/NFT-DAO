import React, { useState } from "react";
import pic1 from "../../../assets/AntPicOne.jpg";
import "./ProposalCard.css";
import MyGovernorJson from '../../utils/MyGovernor.json'
import AddressJson from '../../utils/Address.json'
import Web3 from 'web3';

import { useHistory } from "react-router-dom";
const ProposalCard = () => {

  const [state, setState] = useState(0)
  const proposalStates = { 
    0:"Pending",
    1:"Active",
    2: "Canceled",
    3: "Defeated",
    4: "Succeeded",
    5:"Queued",
    6:"Expired",
    7:"Executed"
  }

  const history4 = useHistory();
  
  function navigateToRoute1(route) {
    history4.push(`ProposalDetails/${route}`);
  }

  var web3 = new Web3("http://127.0.0.1:8545/");
  var myContract = new web3.eth.Contract(MyGovernorJson['abi'], AddressJson['governorAddress'], {
    from: AddressJson['userAddress'], // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  });

  var proposatId = localStorage.getItem('proposalId')
  var proposalDescription = localStorage.getItem('description')

  const checkProposalState = () => {
    if(proposatId){

      myContract.methods.state(proposatId).call().then(res => {
        console.log('proposalState', res, proposalStates[res])
        setState(res)
      })
    }
  }

  checkProposalState();

  

  return (
    <div onClick = {() => navigateToRoute1('/0x98275ffddf84gfg873498708fhfjdshfjkk38ewrhjw')} className="proposalList" >
      <div className="proposalCard">
        <div>
          {/* <img src={pic1}></img> */}
          <span style={{ marginLeft: "350px" }}>
          
          </span>
          {/* <span className="status">Closed</span> */}
        </div>
        <div>Propasal id - {proposatId}</div>
        <div>
          <h6>{proposalDescription}</h6>
        </div>
        <div>
          Proposal State -- {proposalStates[state]}
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
