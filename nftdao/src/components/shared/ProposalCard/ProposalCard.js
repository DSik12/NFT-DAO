import React from "react";
import pic1 from "../../../assets/AntPicOne.jpg";
import "./ProposalCard.css";
import { useHistory } from "react-router-dom";
const ProposalCard = () => {

  const history4 = useHistory();
  
  function navigateToRoute1(route) {
    history4.push(`ProposalDetails/${route}`);
  }
  return (
    <div onClick = {() => navigateToRoute1('/0x98275ffddf84gfg873498708fhfjdshfjkk38ewrhjw')} className="proposalList" >
      <div className="proposalCard" >
        <div>
          <img src={pic1}></img>
          <span style={{ marginLeft: "40px" }}>
            0x98275ffddf84gfg873498708fhfjdshfjkk38ewrhjw
          </span>
          <span className="status">Closed</span>
        </div>
        <div>
          <h4>Buy an Estate</h4>
        </div>
        <div>Propasal id - 487934879834789435798437598437349834</div>
        <div>
          <h6>Buy an Estate</h6>
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
