import './NewEventForm.css'

export default function NewEventForm() {
  return (
    <form className="new-event-form">
      {/* Shorter way to associate the label with the input field */}
      {/* Shorter way to associate the label with the input field */}
      <label>
        <span>Event Title:</span>
        <imput type="text"></imput>
      </label>
      <label>
        <span>Event Date:</span>
        <imput type="date"></imput>
      </label>
      <buttom>Submit</buttom>
    </form>
    // This is the classic was to do it.
    // <form className="new-event-form">
    //   <label htmlFor="title">Event Title:</label>
    //   <imput type="text" id="title"></imput>
    // </form>
  )
}
