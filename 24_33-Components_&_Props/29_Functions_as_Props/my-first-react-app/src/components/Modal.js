import './Modal.css'
export default function Modal({children, handleClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        {/* you can have the buttom here hardcoded, whiich means it is allways here and you have to pass functions, boleans, string
        and number down here via the props as show above ({children, handleClose}) */}
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  )
}