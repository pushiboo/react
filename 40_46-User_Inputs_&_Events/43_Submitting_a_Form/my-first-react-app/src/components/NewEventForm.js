import { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm() {
  const [title, setTitle ] = useState(' ')
  const [date, setDate ] = useState(' ')

const resetForm = () => {
  setTitle('')
  setDate('')
}

const handleSubmit = (e) => {
  e.preventDefault()

  const event = {
    title: title,
    date: date,
    id: Math.floor(Math.random() * 10000)
  }
  console.log('event:', event);
  resetForm()
}

return (
  // When we click the button, then the form submits and not the button itself.
  // This is the reason why we have the onSubmit function in the Form and not at the button!
  <form className="new-event-form" onSubmit={handleSubmit}>
    <label>
      <span>Event Title:</span>
      <input 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
    </label>
    <label>
      <span>Event Date:</span>
      <input 
        type="date" 
        onChange={(e) => setDate(e.target.value)}
        value={date}
      ></input>
    </label>
    <button>Submit</button>
    <p>title - {title}, date - {date} </p>
    <p onClick={resetForm}>ResetForm</p>
  </form>
  )
}
