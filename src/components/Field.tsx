import Match from './Match'

const Field = ({quantity, activeMatches, playerMove}: any) => {

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