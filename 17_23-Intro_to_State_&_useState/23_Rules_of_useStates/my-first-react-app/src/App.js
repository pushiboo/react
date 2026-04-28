import './App.css';
import { useState } from 'react';

// 2 Rule
// It is not allowed to use useState outside of the scope of the component
// useState(true)

function App() {
  // 1 Rule
  // useState has to be a top level hook of a component
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
    // It is not allowed to use useState in an function
    // useState(true)
    // an exeption is a custome hook, more to that in a future lesson
    console.log('event.id', id); 
    
  }

  return (
    <div className="App">
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
