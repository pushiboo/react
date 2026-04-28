// This is the classic way to build Classes but it needs a bit more code and because of the fact that more and more 
// devs preffering to use the function method.
// It is at least good to know how we can create it the classic way with classes
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  render() {
    return (
      <div>
        <h1>Halleo, {this.props.name}</h1>
        <h2>It is {this.state.date}</h2>
      </div>
    )
  }
}