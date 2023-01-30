import React from "react";
import { Navbar } from "../shared/Navbar/Navbar";
import ProposalCard from "../shared/ProposalCard/ProposalCard";
import "./Proposal.css";
const Proposal = () => {
  return (
    <div>
      <Navbar />

      <div className="proposalHeading">
        <h1>
          <span>VIEW</span> ALL <span>PROPOSALS</span>
        </h1>
        <h4>
          <span>A decentralised community </span>helping the world{" "}
          <span>go bankless.</span>
        </h4>
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
