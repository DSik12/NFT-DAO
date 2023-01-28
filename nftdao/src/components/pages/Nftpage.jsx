import React from 'react'
import {Navbar} from '../shared/Navbar/Navbar'
import {NftCard} from '../shared/cards/nftCard'
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";

import './nftPage.css'

const NftPage = () => {

  const history = useHistory();

  function navigateToRoute(route) {
    history.push(route);
  }

  return (
    <div>
        <Navbar/>
        <div className="nftHeading">
        <h1>
          <span>OWN</span> THE <span>NFTs</span>
        </h1>
        <h4>
          Become an <span> Integral part</span> of 
          <span>AMAZING DAO</span>
        </h4>
      </div>
        <div className='titleDisplay'>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
              <NftCard title ={"Create Proposal"} />
            </Grid>
            <Grid item xs={3}>
              <NftCard title ={"Treasury"}  />
            </Grid>
            <Grid item xs={3}>
              <NftCard title ={"NFTs"}  />
            </Grid>
            <Grid item xs={3}>
              <NftCard title ={"Delegate"}  />
            </Grid>
            <Grid item xs={3}>
              <NftCard title ={"Delegate"}  />
            </Grid>
            <Grid item xs={3}>
              <NftCard title ={"Delegate"}  />
            </Grid>
            <Grid item xs={3}>
              <NftCard title ={"Delegate"}  />
            </Grid>
            <Grid item xs={3}>
              <NftCard title ={"Delegate"}  />
            </Grid>
          </Grid>
          </div>
    </div>
  )
}

export default NftPage