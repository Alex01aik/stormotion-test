import '../styles/startForm.css'
import React, { useState } from 'react'

const StartForm: React.FC<any> = (props) => {

  const values = props.values
  const setValues = props.setValues
  const [errorMessage, setErrorMessage] = useState('')

  const numberHandler: React.ChangeEventHandler<HTMLInputElement> = 
    (e): void => {
      setValues({
          ...values,
          [e.target.id]: parseInt(e.target.value)})
          setErrorMessage('')    
    }
  
  const checkboxHanler: React.ChangeEventHandler<HTMLInputElement> = 
    (e): void => {
      setValues({
        ...values,
        [e.target.id]: !values[e.target.id]})
    }

  const submit = (event: React.FormEvent): void => {
    (values.all % 2 === 1)
      ? setValues({
        ...values,
        isGameRun: true})
      : setErrorMessage('The number of all matches must be even!')

    event.preventDefault()
  }

  return (
    <form
      id="startWindow"
      onSubmit={submit}>
      <label
        htmlFor="all">
          Enter the numder of matches:
          </label>
      <input
        type="number"
        id="all"
        value={values.all}
        min={7}
        onChange={numberHandler}/>
        {(errorMessage)
          ?<p className="errorMessage">{errorMessage}</p>
          :<></>
        }
      <label
        htmlFor="activeMatches">
        Enter the numder of touched matches:
        </label>
      <input
        type="number"
        id="activeMatches"
        value={values.activeMatches}
        min={2}
        onChange={numberHandler}/>
      <label
        htmlFor="computerFirst">
        Computer goes first:
      </label>
      <input
        type="checkbox"
        id="computerMovie"
        checked={values.computerMovie}
        onChange={checkboxHanler} />
      <button
        className="startButton"
        type="submit">
        Start
      </button>
    </form>
  )
}

export default StartForm