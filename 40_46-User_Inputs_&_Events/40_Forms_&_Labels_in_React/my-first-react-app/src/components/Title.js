import './Title.css'

export default function Title({title, subtitle}) {
  return (
    // React needs allways a Root Parent Element, there we have this div to rap all other elements.
    // The way around this issue is call a React Fragment and to use it just open Shorthand <> and close your parent element with this </>.
    // Normal Version to use it <React.Fragment></React.Fragment>. You have to use this version while using props!
    // Shorthand version <></>

    // we changed this fragment <></> to <div></div>, because with the div tag we can add classes to it.
    //  A fregment does not output an HTML element to the DOM!
    <div className="title-block">
      <h1 className="title">{title}</h1>
      <br></br>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  )
}