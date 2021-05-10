import React, { useState } from 'react'
import GameArea from './components/GameArea'
import Header from './components/Header'
import StartForm from './components/StartForm'
import GameValues from './interfaces'

const App: React.FC = () =>  {

  const[ values, setValues ] = useState<GameValues>({
    isGameRun: false,
    all: 25,
    activeMatches: 3,
    computerMovie: false
  })

  
  return (
    <>
      <Header />
      {(!values.isGameRun)
        ? <StartForm
            values={values}
            setValues={setValues} />
        : <GameArea
            values={values}
            setValues={setValues} />} 
    </>
  )
}

export default App