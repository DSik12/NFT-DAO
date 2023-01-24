import React from 'react'
import './nftCard.css'

import AntPicOne from '../../../assets/AntPicOne.jpg'
import AntPicTwo from '../../../assets/AntPicTwo.jpg'

export const NftCard = ({title}) => {

    
  return (
    <div className='nftMainCard'>
        <div className='nftDetailsSection'>
            <div className='nftCardTitle'>
                {title}
            </div>
            <img src= {AntPicOne} alt='ant' height= "20vh" width= "auto" />
            <div className='buyButton'>
                Buy NFT
            </div>
        </div>
    </div>
  )
}

