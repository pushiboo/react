import ReactDOM from 'react-dom'
import './Modal.css'

// Remembe, when you're using portal method it move your component out of the App scope, therefore you will loose it's
// css styles!

export default function Modal({children, handleClose, isSalesModal }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      {/* In css we would normaly do this border-color, but in jsx we can't do this, 
      therefore we have to use CamelCaseas shown below */}
      <div className="modal" style={{
        border: "4px solid",
        // below we have a ternary operator
        borderColor: isSalesModal ? "#ff4500" : "#555",
        textAlign: "center"
        }}>
        {children}
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  ), document.body)
}