import React from 'react'
import {Navbar} from '../shared/Navbar/Navbar'
import {TileCard} from '../shared/cards/tileCard'
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";

import './homePage.css'

const Home = () => {

  const history = useHistory();

  function navigateToRoute(route) {
    history.push(route);
  }

  return (
    <div className='homePage'>
        <Navbar/>
        <div className='titleDisplay'>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}   onClick= {() => navigateToRoute('/Create')}>
              <TileCard title ={"Create Proposal"} description = {"Click to enter the details and create a proposal"} />
            </Grid>
            <Grid item xs={6} onClick= {() => navigateToRoute('/Treasury')} >
              <TileCard title ={"Treasury"} description = {"View the DAO treasury and add funds to the treasury."} />
            </Grid>
            <Grid item xs={6}  onClick= {() => navigateToRoute('/Nft')}>
              <TileCard title ={"NFTs"} description = {"View Our NFT collection, own one and be the menber of dao to participate in creating proposals and voting"} 
               />
            </Grid>
            <Grid item xs={6}  onClick= {() => navigateToRoute('/Delegate')}>
              <TileCard title ={"Delegate"} description = {"Delegate some address to be a part of the DAO"} />
            </Grid>
          </Grid>
          </div>
    </div>
  )
}

export default Home