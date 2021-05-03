import '../styles/match.css'

const Match = ({num, activeMatches, playerMove}: any) => {

  return (
    <div
      id="match"
      className={(num < activeMatches)?'active':'passive'}
      onClick={() => playerMove(num + 1)}/>
  )
}

export default Match