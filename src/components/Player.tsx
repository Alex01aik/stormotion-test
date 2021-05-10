import React from 'react'
import Match from './Match'

const Player: React.FC<{quantity: number}> = ({quantity}) => {
  return (
    <div id="player" className="sector">
      <div className="number">{quantity}</div>
      <div className="matches">
        {
          [...Array(quantity)].map((n , i) => (
            <Match key={i}/>
          ))
        }
      </div>
    </div>
  )
}

export default Player