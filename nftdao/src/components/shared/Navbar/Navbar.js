import React, {useEffect} from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Navbar.css";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export const Navbar = () => {
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
    <div>
      <nav style={{ borderColor: "#2d2d2d" }}>
        <div className="rainbow">
          <ConnectButton />
          {disconnectElement()}
        </div>
        
      </nav>
    </div>
  );
};
