import './App.css';
import React, { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal'

function App() {
  const [showModal, setShowModal] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3},
    {title: "pushiboo say's hallo", id: 4}
  ])

 console.log(showModal);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log('event.id', id); 
  }
  // his version
  const handleClose = () => {
    setShowModal(false)
  }
  // my version
  // const handleClose = () => {
  //   setShowModal = !setShowModal
  // }
  const subtitle ="All the latest events in Marioland!"
  return (
    <div className="App">
      {/* If you just want to pass a bolean, string, number or function etc. down to the component, then do it the way
      show below: */}
      <Title title="Events in Your Area" subtitle={subtitle}/>
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{ index } - {event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>Delete event</button>
        </React.Fragment>
      ))}
      {/* If you want to pass more flexible down to the component, then do it the way
      show below: */}
      {/* If showModal is true, the Modal will be displayed and if not then it's hidden.
      // To pass props down to the component you can. <Modal>pass everything else here, then close it again</Modal> */}
      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sit incidunt. Natus autem nam quisquam. 
          Vel dolore commodi voluptate nesciunt aliquid consequuntur laboriosam exercitationem earum! Possimus,
          id pariatur ad autem numquam veritatis magnam eligendi suscipit cum et dolorum, 
          aliquam commodi, architecto laborum in exercitationem enim ratione fuga delectus non itaque?
        </p>
        {/* but you can also handle your button in the child part but sometimes we need to pass a function down to the componentn */}
      </Modal>}
      <div>
         <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
    </div>
  );
}

export default App;
