import './Modal.css'
export default function Modal({children}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
      </div>
    </div>
  )
}
// export default function Modal(props) {
//   return (
//     <div className="modal-backdrop">
//       <div className="modal">
//         {props.children}
//       </div>
//     </div>
//   )
// }
