import React from "react";
import { Navbar } from "../shared/Navbar/Navbar";
import ProposalCard from "../shared/ProposalCard/ProposalCard";
import './Proposal.css'
const Proposal = () => {
  return (
    <div>
      <Navbar />
      <div className="proposalHeading">
        <div>
          <h1>Proposals</h1>
        </div>
        <div>A decentralised community helping the world go bankless.</div>
      </div>
      <div>
        <ProposalCard />
        <ProposalCard />
        <ProposalCard />
        <ProposalCard />
      </div>
    </div>
  );
};

export default Proposal;
