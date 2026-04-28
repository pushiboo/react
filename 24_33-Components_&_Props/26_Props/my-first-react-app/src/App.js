import './App.css';
import { useState } from 'react';
import Title from './components/Title'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3},
    {title: "pushiboo say's hallo", id: 4}
  ])
  console.log(showEvents)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log('event.id', id); 
  }

  const subtitle ="All the latest events in Marioland!"
  return (
    <div className="App">
      {/* Reason to pass props is to make your component reusable */}
      <Title title="Events in Your Area" subtitle={subtitle}/>
      {/* Now where we set the title and subtitle into props, we have a nice and easy to reusable Titel Component */}
      <Title title="another title" subtitle="another subtitle"/>
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {! showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{ index } - {event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
