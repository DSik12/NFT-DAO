import React, { useState } from "react";
import './Vote.css';
const Vote = (props) => {
  const [Stage, setStage] = useState("");
  const [Loading, setLoading] = useState(false);
  //  const { data } = props;

  //  useEffect(() => {
  //   receipt(data);
  //  }, [data]);

  //  const receipt = async (IDS) => {
  //   const id = IDS.proposal_id.toString();
  //   const state = await governanceContract.state(id);
  //   setStage(state);
  //  };

  //  const handleButton = async (e) => {
  //   try {
  //    const choice = Number(e.target.id);
  //    setLoading(true);
  //    const Tx = await governanceContract.castVote(data.proposal_id.toString(), choice);
  //    const voteTX = await Tx.wait();
  //    console.log(voteTX);
  //    navigate("/");
  //   } catch (error) {
  //    console.error(`Error - ${error}`);
  //    setLoading(false);
  //   }
  //  };

  //  if (Stage !== 1) {
  //   return (
  //    <div>
  //     <p className="text-white mt-10 text-3xl hover:text-green-700">Voting period is over</p>
  //    </div>
  //   );
  //  } else {
  return (
    <div>
      <div style={{ color: "white", margin: "200px" }}>
        <div className="votinginfo"><h1 > <span>VOTING</span> INFOR<span>MATION</span></h1></div>
        
        <h5>First Proposal</h5>
        <h6>Proposal Address: 4589674589074567458679456894507</h6>
        <h6>Proposal Id: 45894897689745689457956794563</h6>
        <h6>Voting System: Single NFT voting</h6>
        <h6>Start Block: 5676787</h6>
        <h6>End Block: 458989</h6>
        <h6> Snapshot</h6>
        <div>
          <h2 style={{ margin: "30px 0px" }}>Votes</h2>
          <h6>Against Votes: 0</h6>
          <h6>For Votes: 1</h6>
          <h6>Abstain: 0</h6>
        </div>
        <h3>Voting Period is Over</h3>
      </div>
    </div>
  );
};

export default Vote;
