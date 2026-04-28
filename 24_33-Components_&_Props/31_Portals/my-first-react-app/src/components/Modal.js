import ReactDOM from 'react-dom'
import './Modal.css'

// Remembe, when you're using portal method it move your component out of the App scope, therefore you will loose it's
// css styles!

export default function Modal({children, handleClose }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  ), document.body)
}