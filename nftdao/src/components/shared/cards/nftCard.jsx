import React from 'react'
import './nftCard.css'

import AntPicOne from '../../../assets/AntPicOne.jpg'
import AntPicTwo from '../../../assets/AntPicTwo.jpg'

export const NftCard = ({nftValue}) => {

  const nftJson = {
    "1": {
      "name": "Devil1",
      "uri": "https://mudemo.infura-ipfs.io/ipfs/QmPCg6s6BGGXi5qYrk99mF1Gp85M9WgUVuEvotRMh35xSX"
    },
    "2": {
      "name": "Devil2",
      "uri": "https://mudemo.infura-ipfs.io/ipfs/QmXeweqRQH966zjxohKmBe2LFqgxBBNzAkckvJgLWXNKHC"
    },
    "3": {
      "name": "Devil3",
      "uri": "https://mudemo.infura-ipfs.io/ipfs/QmWPo2mk289RodAdeA4HCLtjeu2PC776YCdWV6M5AgRmoS"
    },
    "4": {
      "name": "Devil4",
      "uri": "https://mudemo.infura-ipfs.io/ipfs/QmS2bwJatg7cAE3gs1KUCBbC8ZVJmSYvL9JkKJ9RUh89EE"
    },
    "5": {
      "name": "Devil5",
      "uri": "https://mudemo.infura-ipfs.io/ipfs/Qmapw5Fu3tGjrRD6DG2A98upy2FhqfZZ6Jbp1v6NSw7zgp"
    }
  }

    const nftKeys = Object.keys(nftJson)
    console.log('keyss', nftKeys)
    
  return (
    <div className='nftMainCard'>
        <div className='nftDetailsSection'>
            <div className='nftCardTitle'>
                {nftJson[nftValue]['name']}
            </div>
            <img src= {nftJson[nftValue]['uri']} alt='ant' height= "100px" width= "50px" />
            <div className='buyButton'>
                Buy NFT
            </div>
        </div>
    </div>
  )
}

