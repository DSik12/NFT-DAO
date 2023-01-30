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
              <NftCard nftValue={1} />
            </Grid>
            <Grid item xs={3}>
              <NftCard nftValue={2} />
            </Grid>
            <Grid item xs={3}>
              <NftCard nftValue={3} />
            </Grid>
            <Grid item xs={3}>
              <NftCard nftValue={4}   />
            </Grid>
            <Grid item xs={3}>
              <NftCard nftValue={5}  />
            </Grid>

          </Grid>
          </div>
    </div>
  )
}

export default NftPage