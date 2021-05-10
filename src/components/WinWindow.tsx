import React from 'react'

const WinWindow: React.FC<any> = ({values, setValues}) => {

  return (
    <div id="winWindow">
    {(values.player % 2 === 0)
      ?<h1>You win</h1>
      :<h1>You lost</h1>}
    <p>You get {values.player} matches!</p>
    <button
      className="startButton"
      onClick={() => setValues({
        isGameRun: false,
        all: 25,
        activeMatches: 3,
        computerMovie: false,
        player: 0,
        rival: 0})}>
        PLAY AGAIN
    </button>
    </div>
  )
}

export default WinWindow