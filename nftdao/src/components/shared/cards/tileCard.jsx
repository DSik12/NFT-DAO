import React from 'react'
import './tileCard.css'

import AntPicOne from '../../../assets/AntPicOne.jpg'
import AntPicTwo from '../../../assets/AntPicTwo.jpg'

export const TileCard = ({title,description}) => {

    
  return (
    <div className='mainCard'>
        <div className='detailsSection'>
            <div className='cardTitle'>
                {title}
            </div>
            <div className='cardDescription'>
                {description}
            </div>
        </div>
        <img src= {AntPicOne} alt='ant' height= "80vh" width= "auto" />
    </div>
  )
}

