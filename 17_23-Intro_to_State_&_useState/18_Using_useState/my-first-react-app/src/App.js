import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('push')

  const handleClick = () => {
    setName('pushiboo')
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
