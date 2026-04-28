import './App.css';
import { useState } from 'react';

function App() {
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3},
    {title: "pushiboo say's hallo", id: 4}
  ])

  const handleClick = (id) => {
    // The prefferd way to update a state is to use a callback function with the previous state and then filter it, like shown blelow:
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    // In case your previous Event does not depent on that state you dont have to use the prevEvents Method
    // You can then use the below direct update version, but remember in most scenarios you would like to work with
    // the prevEvents to update a value
    // setEvents(events.filter((event) => {
    //   return id !== event.id
    // }))
    console.log('event.id', id); 
    
  }

  return (
    <div className="App">
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{ index } - {event.title}</h2>
          {/* We can do this below, because it will fire right now when the page gets rendered */}
          {/* <button onClick={handleClick(event.id)}>Delete event</button> */}
          {/* There we have to use an anonymous function, which just runs when the user clicks */}
          <button onClick={() => {handleClick(event.id)}}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
