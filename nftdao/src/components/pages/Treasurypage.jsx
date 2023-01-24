import React from 'react'
import {Navbar} from '../shared/Navbar/Navbar'

import './treasuryPage.css'

export const Treasurypage = () => {
  return (
    <div className='mainPage'>
      <Navbar />

      <div className='treasuryBox'>
        <div className='treasuryText'>
        The total amount in the DAO's Treasury is...
        </div>
        <div className='treasuryAmount'>
          5.0525 Eth
        </div>
      </div>

      <div className='amountBox'>
        <div className='amountText'>
          Enter the amount to be added to Treasury
        </div>
        <input className ="amountEntry"  />
        <div className='ethText'>
          Eth
        </div>
      </div>

      <div className='transactButton'>
        Transact
      </div>
    </div>
  )
}

export default Treasurypage
