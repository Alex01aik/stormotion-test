import Match from './Match'

const Player = ({quantity}: {quantity: number}) => {
  return (
    <div id="player" className="sector">
      <div className="number">{quantity}</div>
      <div className="matches">
        {
          [...Array(quantity)].map((n: number , i: number) => (
            <Match key={i}/>
          ))
        }
      </div>
    </div>
  )
}

export default Player