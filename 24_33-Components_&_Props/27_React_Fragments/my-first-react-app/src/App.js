import './App.css';
import React, { useState } from 'react';
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
      <Title title="Events in Your Area" subtitle={subtitle}/>
      {showEvents && (
        <>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </>
      )}
      {! showEvents && (
        <>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </>
      )}
      {showEvents && events.map((event, index) => (
        // To be able to use react fragments with props, we've to use the long version of react fragment like shown below.
        // Do not forget to import React from react, import React, { useState } from 'react';
        <React.Fragment key={event.id}>
          <h2>{ index } - {event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>Delete event</button>
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
