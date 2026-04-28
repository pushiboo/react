import './App.css';
import React, { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3},
    {title: "pushiboo say's hallo", id: 4}
  ])
  // console.log(showEvents)
  const handleClose = () => {
    setShowModal = !setShowModal
  }
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
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
          <br></br>
          <button onClick={() => setShowModal(true)}>show modal</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
          <br></br>
          <button onClick={() => setShowModal(true)}>show modal</button>
        </div>
      )}
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{ index } - {event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>Delete event</button>
        </React.Fragment>
      ))}
      {/* <Modal /> */}
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {showModal && <Modal handleClose={handleClose}>
      {/* {showModal && <Modal> */}
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sit incidunt. Natus autem nam quisquam. 
          Vel dolore commodi voluptate nesciunt aliquid consequuntur laboriosam exercitationem earum! Possimus,
          id pariatur ad autem numquam veritatis magnam eligendi suscipit cum et dolorum, 
          aliquam commodi, architecto laborum in exercitationem enim ratione fuga delectus non itaque?
        </p>
        <button onClick={() => setShowModal(false)}>hide modal</button>
        {/* <a href="#">find out more ...</a> */}
      </Modal>}
    </div>
  );
}

export default App;
