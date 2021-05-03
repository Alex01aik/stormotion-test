import '../styles/startForm.css'
import React from 'react'

const StartForm = (props: any) => {

  const values = props.values
  const setValues = props.setValues

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    (e.target.type === 'checkbox')
      ? setValues({
        ...values,
        [e.target.id]: !values[e.target.id]})
      : setValues({
        ...values,
        [e.target.id]: parseInt(e.target.value)})    
  }

  const submit = (event: React.FormEvent): void => {
    (values.all % 2 === 1)
      ? setValues({
        ...values,
        isGameRun: true})
      : alert('The number of all matches must be even!')

    event.preventDefault()
  }

  return (
    <form
      id="startWindow"
      onSubmit={(e) => submit(e)}>
      <label
        htmlFor="all">
          Enter the numder of matches:
          </label>
      <input
        type="number"
        id="all"
        value={values.all}
        min={7}
        onChange={(e) => changeHandler(e)}/>
      <label
        htmlFor="activeMatches">
        Enter the numder of touched matches:
        </label>
      <input
        type="number"
        id="activeMatches"
        value={values.activeMatches}
        min={2}
        onChange={(e) => changeHandler(e)}/>
      <label
        htmlFor="computerFirst">
        Computer goes first:
      </label>
      <input
        type="checkbox"
        id="computerMovie"
        checked={values.computerMovie}
        onChange={(e) => changeHandler(e)} />
      <button
        className="startButton"
        type="submit">
        Start
      </button>
    </form>
  )
}

export default StartForm