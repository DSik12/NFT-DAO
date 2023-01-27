import React from "react";
import pic1 from "../../../assets/AntPicOne.jpg";
import "./ProposalCard.css";
const ProposalCard = () => {
  return (
    <div className="proposalList" >
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
