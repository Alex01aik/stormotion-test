import React from 'react'
import Match from './Match'

const Field: React.FC<any> = ({quantity, activeMatches, playerMove}) => {

  return (
    <div id="field" className="sector">
      <div className="matches">
        {[...Array(quantity)].map((n: number , i: number) => (
            <Match
              key={i}
              num={i}
              activeMatches={activeMatches}
              playerMove={playerMove}/>
          ))}
      </div>
    </div>
  )
}

export default Field