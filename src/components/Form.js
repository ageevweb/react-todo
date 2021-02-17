import React, {useState, useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)

  const submitHandler = e => {
    e.preventDefault()
    if(value.trim()) {
      alert.show('The note was created', 'success')
      setValue('')
    } else {
      alert.show('Write your note')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control"
          placeholder="Your new note"
          value={value}
          onChange={e=>setValue(e.target.value)}
        />
      </div>
    </form>
  )
}