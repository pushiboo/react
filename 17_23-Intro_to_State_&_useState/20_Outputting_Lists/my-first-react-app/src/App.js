import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('push')
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3},
    {title: "pushiboo say's hallo", id: 4}
    
  ])

  const handleClick = () => {
    setName('pushiboo')
    console.log('name:', name);
    
  }

  return (
    <div className="App">
      <h1>My Name is : {name}</h1>
      <button onClick={handleClick}>Change Name</button>
      {events.map((event, index) => (
        <div key={event.id}>
          {/* Better to use a dedicated id as the uniqe key value */}
          {/* <h2>{event.title}</h2> */}
          {/* please do not use index as a key pair, as long as you are sure that the data won't change */}
          <h2>{ index } - {event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
