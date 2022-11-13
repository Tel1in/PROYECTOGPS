import React from 'react'
import "./BButton.css"

function BButton(props) {
  return (
    <div className='nav-icon-5'>
        <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open' : ''} `}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    

  )
}

export default BButton