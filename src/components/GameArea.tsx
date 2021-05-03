import { useEffect } from 'react'
import Field from'./Field'
import Player from './Player'
import WinWindow from './WinWindow'

const GameArea = ({values , setValues}: any) => {

  const compMovie: number = values.computerMovie
  
  useEffect((): void => {
    if(compMovie){
      setTimeout(() => computerMovie(), 350)
    }
  },[compMovie])

  const playerMove =
    (num: number): void => setValues({
      ...values,
      all: values.all - num,
      player: values.player + num,
      computerMovie: true
    })
  
  const computerMovie = (): void => {
      (values.all)
      ?((values.all - 1) % 4 === 0 || (values.all - 1) % 4 === 1)
        ? setValues({
          ...values,
          all: values.all - 1,
          rival: values.rival + 1,
          computerMovie: false})
        : setValues({
          ...values,
          all: values.all - values.activeMatches,
          rival: values.rival + values.activeMatches,
          computerMovie: false})
      : setValues({
        ...values,
        computerMovie: false})
  }

  return (
    <div id="gameArea">
      {(values.all)
      ? <>
          <Player
            quantity={values.rival}/>
          <Field
            quantity={values.all}
            activeMatches={values.activeMatches}
            playerMove={playerMove} />
          <Player
            quantity={values.player}/>
        </>
      : <WinWindow
          values={values}
          setValues={setValues} />}
    </div>
  )
}

export default GameArea