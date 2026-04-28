// The main way to use props, because it is clearly readable that we using a props property
// export default function Title(props) {
//   return (
//     <div>
//       {/* <h1 className="title">Mario Kingdom Events</h1> */}
//       <h1 className="title">{props.title}</h1>
//       <br></br>
//       {/* <h2 className="subtitle">All the latest events in mario kingdom</h2> */}
//       <h2 className="subtitle">{props.subtitle}</h2>
//     </div>
//   )
// }
// The destructrued way
//  we can destructure the props property by using curly brakets and the code looks like shown below:
export default function Title({title, subtitle}) {
  return (
    <div>
      {/* <h1 className="title">Mario Kingdom Events</h1> */}
      <h1 className="title">{title}</h1>
      <br></br>
      {/* <h2 className="subtitle">All the latest events in mario kingdom</h2> */}
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  )
}