import './App.css';

function App() {

  let name = 'mario'

  const handleClick = () => {
    name = 'luigi'
    console.log('name:', name);
    
  }

  return (
    <div className="App">
      <h1>My Name is : {name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
