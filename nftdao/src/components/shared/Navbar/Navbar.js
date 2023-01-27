import React, {useEffect} from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Navbar.css";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useHistory } from "react-router-dom";
import daoImage from '../../../assets/dao.png'

export const Navbar = () => {

  const history = useHistory();

  function navigateToRoute(route) {
    history.push(route);
  }


  const { address , isConnected} = useAccount({
    onConnect: ({ address, isReconnected }) => {
      if (!isReconnected) {
        alert("Wallet has been connected. " + address);
      }
    },
    onDisconnect: () => {
         console.log('We have disconnected')
    }
  });
 
  const {disconnect} = useDisconnect();
  const disconnectElement = () => {
    if(isConnected)
        return <button className="button1" onClick = {()=> disconnect()}>Disconnect</button>
    
  }

  useEffect(()=>{
    console.log(`We have a new address: , ${address}`)
  })

  return (
    <div className="Navbar">
        <div className="navTitles">
          <img src={daoImage} alt="logo" height= "50px" width= "50px" className="daoLogo" onClick= {() => navigateToRoute('/')}></img>
          <div className="headingText" onClick= {() => navigateToRoute('/Home')}>
            Home
          </div>
          <div className="headingText" onClick= {() => navigateToRoute('/Proposal')}>
            Proposal
          </div>
          <div className="headingText" onClick= {() => navigateToRoute('/Create')}>
            Create Proposal
          </div>
          <div className="headingText" onClick= {() => navigateToRoute('/Treasury')}>
            Treasury
          </div>
          <div className="headingText" onClick= {() => navigateToRoute('/Nft')}>
            NFTs
          </div>
          <div className="headingText" onClick= {() => navigateToRoute('/Delegate')}>
            Delegate
          </div>
        </div>
        <div className="rainbow">
          <ConnectButton />
          {disconnectElement()}
        </div>
    </div>
  );
};
